package com.pocketpay.userservice.controller;

import com.pocketpay.userservice.dto.TokenDTO;
import com.pocketpay.userservice.dto.UserDTO;
import com.pocketpay.userservice.dto.request.AuthenticationRequest;
import com.pocketpay.userservice.dto.response.ApiErrorResponse;
import com.pocketpay.userservice.entity.User;
import com.pocketpay.userservice.service.UserService;
import org.springframework.http.HttpStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@Slf4j
@RequestMapping("users")
public class UserServiceController {
    private final UserService userService;

    public UserServiceController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/")
    public ResponseEntity<UserDTO> saveUser(@RequestBody User user){
        log.info("Request received at createUser.");
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveUser(user));
    }

    @PostMapping("/validateToken")
    public ResponseEntity<ApiErrorResponse> validateToken(@RequestBody TokenDTO tokenRequest) {
        userService.validateToken(tokenRequest);
        return ResponseEntity.ok().body(new ApiErrorResponse(HttpStatus.OK.value(),HttpStatus.OK.name(), "Token is valid"));
    }
    @PostMapping("/login")
    public ResponseEntity<TokenDTO> loginUser(@RequestBody AuthenticationRequest authenticationRequest){
        return new ResponseEntity<>(userService.loginUser(authenticationRequest),HttpStatus.OK);
    }
    @GetMapping("/verify")
    public ResponseEntity<UserDTO> getUserByEmail(@RequestParam("email") String email) {
        UserDTO user = userService.getUserByEmail(email);
        return ResponseEntity.ok(user);
    }
}
