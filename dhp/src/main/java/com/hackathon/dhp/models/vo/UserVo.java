package com.hackathon.dhp.models.vo;

import lombok.*;
import org.springframework.http.HttpStatus;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UserVo {
    private String userId;
    private String password;
    private List<String> roles;
    private String token;
    private HttpStatus status;
}
