package com.pocketpay.userservice.service;

import com.pocketpay.userservice.dto.TokenDTO;
import com.pocketpay.userservice.dto.UserDTO;
import com.pocketpay.userservice.dto.request.AuthenticationRequest;
import com.pocketpay.userservice.entity.User;
import com.pocketpay.userservice.exceptions.UserNotFoundException;
import com.pocketpay.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;
import java.util.Optional;

import static com.pocketpay.userservice.mapper.UserServiceMapper.convertEntityToDto;

@Service
public class UserServiceImplementation implements UserService {
    private final  UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    private ModelMapper modelMapper;
    private final JwtService jwtService;
    public UserServiceImplementation(JwtService jwtService,UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDTO saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedEntity = userRepository.save(user);
        return convertEntityToDto(savedEntity);
    }

    @Override
    public void validateToken(TokenDTO tokenRequest) {
        jwtService.isTokenValid(tokenRequest.getToken());
    }

    @Override
    public TokenDTO loginUser(AuthenticationRequest authenticationRequest) {
        String jwtToken=jwtService.generateToken(authenticationRequest.getEmail(),authenticationRequest.getPassword());
        return new TokenDTO(jwtToken);
    }
    @Override
    public UserDTO getUserByEmail(String email) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.getUserByEmail(email));
        if (userOptional.isEmpty()) {
            throw new UserNotFoundException("User not found with email: " + email);
        }
        return modelMapper.map(userOptional.get(), UserDTO.class);
    }
}
