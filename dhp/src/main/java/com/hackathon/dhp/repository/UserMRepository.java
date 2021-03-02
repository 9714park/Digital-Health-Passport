package com.hackathon.dhp.repository;

import com.hackathon.dhp.models.domain.UserM;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserMRepository extends JpaRepository<UserM, Long> {
    Optional<UserM> findByUserId(String userId);
}
