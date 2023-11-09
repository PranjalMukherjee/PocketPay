package com.pocketpay.userservice.service;

import com.pocketpay.userservice.dto.TokenDTO;
import com.pocketpay.userservice.dto.UserDTO;
import com.pocketpay.userservice.dto.request.AuthenticationRequest;
import com.pocketpay.userservice.entity.Address;
import com.pocketpay.userservice.entity.User;
import com.pocketpay.userservice.mapper.UserServiceMapper;
import com.pocketpay.userservice.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserServiceImplementation userServiceImplementation;
    private User testUser;
    @Mock
    private PasswordEncoder passwordEncoder;
    @Mock
    private JwtService jwtService;
    @Mock
    private AuthenticationManager authenticationManager;
    private User user= User.builder().id(1).email("email").password("password").build();
    private UserDTO userResponse=UserDTO.builder().id(1).build();
    private String jwtToken="dummyToken";

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        testUser = new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address);
    }

    @Test
    void testSaveUser() {
        when(userRepository.save(any(User.class))).thenReturn(testUser);

        UserDTO userDTO = new UserDTO();
        userDTO.setId(1);
        userDTO.setFirstName("John");
        userDTO.setLastName("Doe");
        userDTO.setEmail("johndoe@example.com");

        UserDTO result = userServiceImplementation.saveUser(UserServiceMapper.convertDtoToEntity(userDTO));

        assertNotNull(result);
        assertEquals("Doe", result.getLastName());
    }
    @Test
    void givenTokenRequest_whenTokenValid_thenPositiveResponse(){
        TokenDTO tokenDTO=new TokenDTO(jwtToken);
        when(jwtService.isTokenValid(tokenDTO.getToken())).thenReturn(true);
        userServiceImplementation.validateToken(tokenDTO);
        verify(jwtService).isTokenValid(tokenDTO.getToken());
    }
    @Test
    void givenAuthenticationRequest_whenUserCredentialsValid_testLoginUser(){
        AuthenticationRequest authenticationRequest= AuthenticationRequest.builder().email("email").password("password").build();
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenReturn(null);
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.ofNullable(user));
        assertEquals("dummyToken",jwtToken);
    }
     
}
