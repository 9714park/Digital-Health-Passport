package com.hackathon.dhp.service;

import com.hackathon.dhp.models.domain.UserM;
import com.hackathon.dhp.models.domain.UserRole;
import com.hackathon.dhp.repository.UserMRepository;
import com.hackathon.dhp.repository.UserRoleRepository;
import com.hackathon.dhp.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserMRepository userMRepository;

    @Autowired
    UserRoleRepository userRoleRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserM user = userMRepository.findByUserId(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        UserRole userRole = userRoleRepository.findByUser(user).orElseThrow(EntityNotFoundException::new);

        return UserDetailsImpl.build(user, userRole);
    }
}
