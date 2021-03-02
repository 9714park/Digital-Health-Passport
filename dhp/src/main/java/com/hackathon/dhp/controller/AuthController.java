package com.hackathon.dhp.controller;

import com.hackathon.dhp.models.vo.request.LoginRequestVo;
import com.hackathon.dhp.models.vo.request.UserSignUpRequestVo;
import com.hackathon.dhp.models.vo.response.JwtResponseVo;
import com.hackathon.dhp.models.vo.response.UserSignUpResponseVo;
import com.hackathon.dhp.security.JwtUtils;
import com.hackathon.dhp.security.UserDetailsImpl;
import com.hackathon.dhp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtUtils jwtUtils;


    @GetMapping("/authenticate")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void authenticate() {
        // we don't have to do anything here
        // this is just a secure endpoint and the JWTFilter
        // validates the token
        // this service is called at startup of the app to check
        // if the jwt token is still valid
    }

    @PostMapping("/login")
    public JwtResponseVo authenticateUser(@RequestBody LoginRequestVo loginRequestVo) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestVo.getUserId(), loginRequestVo.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return JwtResponseVo.builder().token(jwt)
                .id(userDetails.getId())
                .userId(userDetails.getUsername())
                .roles(roles)
                .build();
    }

    @PostMapping("/signUp")
    public UserSignUpResponseVo signUp(@RequestBody UserSignUpRequestVo signUpRequestVo) {
        return userService.userSignUp(signUpRequestVo);
    }

}
