package com.hackathon.dhp.service;

import com.hackathon.dhp.models.vo.request.UserSignUpRequestVo;
import com.hackathon.dhp.models.vo.response.UserSignUpResponseVo;

import javax.transaction.Transactional;

public interface UserService {
    @Transactional
    UserSignUpResponseVo userSignUp(UserSignUpRequestVo userSignUpRequestVo);
}
