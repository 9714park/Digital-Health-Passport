package com.hackathon.dhp.repository;

import com.hackathon.dhp.models.domain.UserM;
import com.hackathon.dhp.models.domain.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Long> {
    Optional<UserRole> findByUser(UserM user);
}
