package com.hackathon.dhp.service;

import com.hackathon.dhp.models.domain.UserM;
import com.hackathon.dhp.models.domain.UserRole;
import com.hackathon.dhp.models.enums.AuthProcessStatus;
import com.hackathon.dhp.models.enums.UserRoleEnum;
import com.hackathon.dhp.models.vo.request.UserSignUpRequestVo;
import com.hackathon.dhp.models.vo.response.UserSignUpResponseVo;
import com.hackathon.dhp.repository.UserMRepository;
import com.hackathon.dhp.repository.UserRoleRepository;
import com.hackathon.dhp.security.AES;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMRepository userMRepository;

    @Autowired
    UserRoleRepository userRoleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${app.aesSecret}")
    private String aesSecret;


    @Override
    @Transactional
    public UserSignUpResponseVo userSignUp(UserSignUpRequestVo signUpVo){
        Optional<UserM> userOpt = userMRepository.findByUserId(signUpVo.getUserId());
        if (userOpt.isPresent()) {
            String errorMessage = "Existing account found.";
            return UserSignUpResponseVo.of(AuthProcessStatus.SIGNUP_DUPLICATE, errorMessage);
        }

        UserM userM = new UserM();
        userM.setUserId(signUpVo.getUserId());
        userM.setPassword(passwordEncoder.encode(signUpVo.getPassword()));
        userM.setName(signUpVo.getName());
        userM.setHealthCardNo(AES.encrypt(signUpVo.getHealthCardNo(), aesSecret));

        userM = userMRepository.save(userM);

        UserRole userMRole = new UserRole();
        userMRole.setUser(userM);
        userMRole.setRoleName(UserRoleEnum.valueOf(signUpVo.getRole()));
        userRoleRepository.save(userMRole);

        return UserSignUpResponseVo.of(AuthProcessStatus.SIGNUP_COMPLETED, "Successfully registered");
    }
}
