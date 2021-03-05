package com.hackathon.dhp.models.vo.response;

import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponseVo {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String userId;
    private List<String> roles;
}
