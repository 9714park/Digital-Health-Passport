package com.hackathon.dhp.models.vo.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSignUpRequestVo {
    private String userId;
    private String password;
    private String name;
    private String healthCardNo;
    private String role;
}
