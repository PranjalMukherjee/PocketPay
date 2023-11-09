package com.pocketpay.userservice.service;

import com.pocketpay.userservice.dto.TokenDTO;
import com.pocketpay.userservice.dto.UserDTO;
import com.pocketpay.userservice.dto.request.AuthenticationRequest;
import com.pocketpay.userservice.entity.User;

public interface UserService {
    public UserDTO saveUser(User user);
    void validateToken(TokenDTO tokenRequest);
    TokenDTO loginUser(AuthenticationRequest authenticationRequest);
    UserDTO getUserByEmail(String email);
}
