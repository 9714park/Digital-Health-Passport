package com.hackathon.dhp.models.vo.response;

import com.hackathon.dhp.models.enums.AuthProcessStatus;
import lombok.*;

@Builder(toBuilder = true)
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserSignUpResponseVo {
    private String processStatus;
    private String processMessage;

    public static UserSignUpResponseVo of(AuthProcessStatus statusEnum, String processMessage) {
        return UserSignUpResponseVo.builder()
                .processStatus(statusEnum.name())
                .processMessage(processMessage)
                .build();
    }
}
