package com.pocketpay.userservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pocketpay.userservice.dto.TokenDTO;
import com.pocketpay.userservice.dto.UserDTO;
import com.pocketpay.userservice.dto.request.AuthenticationRequest;
import com.pocketpay.userservice.entity.Address;
import com.pocketpay.userservice.entity.User;
import com.pocketpay.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.Date;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {
    @Mock
    private UserService userService;
    @InjectMocks
    private UserServiceController userServiceController;
    private MockMvc mockMvc;
    private User testUser;
    private UserDTO testUserDTO;
    private ObjectMapper mapper = new ObjectMapper();
    @BeforeEach
    void setUps() {
        MockitoAnnotations.initMocks(this);
        Date dateOfBirth = new Date(1990, 5, 15);
        Address address = new Address(1, "123 Main St", "CityVille", "12345");
        testUser = new User(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address);
        testUserDTO = new UserDTO(1, "John", "Doe", dateOfBirth, "johndoe@example.com",
                "password123", "customer", "USA", "1234567890",address
        );
    }
    @BeforeEach
    void setUp() {
        this.mockMvc = MockMvcBuilders.standaloneSetup(userServiceController).build();
    }

    @Test
    void givenUserDto_whenSaveUser_thenReturnSavedUserDto() {
        // Given
        when(userService.saveUser(testUser)).thenReturn(testUserDTO);

        // When
        ResponseEntity<UserDTO> response = userServiceController.saveUser(testUser);
        UserDTO userDTO = response.getBody();

        // Then
        assertEquals(testUserDTO, userDTO);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        Mockito.verify(userService, times(1)).saveUser(testUser);
    }
     @Test
    void givenTokenRequest_whenTokenRequestValid_thenValidateToken() throws Exception {
        TokenDTO tokenRequest = new TokenDTO("dummyToken");
        doNothing().when(userService).validateToken(any(TokenDTO.class));
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/users/validateToken")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(tokenRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test
    void givenAuthenticationRequest_whenUserIsValid_thenLoginUser() throws Exception {
        AuthenticationRequest authenticationRequest=new AuthenticationRequest("email","password");
        TokenDTO token=new TokenDTO("dummyToken");
        when(userService.loginUser(authenticationRequest)).thenReturn(token);
        mockMvc.perform(MockMvcRequestBuilders.
                        post("/users/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(authenticationRequest))
                        .accept(MediaType.APPLICATION_JSON)).
                andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test
    void testGetUserByEmail() {
        String email = "test@gmail.com";
        UserDTO userDto = new UserDTO();
        when(userService.getUserByEmail(email)).thenReturn(userDto);
        ResponseEntity<UserDTO> response = userServiceController.getUserByEmail(email);
        verify(userService, times(1)).getUserByEmail(email);
        assert response.getStatusCode() == HttpStatus.OK;
        assert response.getBody() != null && response.getBody().equals(userDto);
    }

}
