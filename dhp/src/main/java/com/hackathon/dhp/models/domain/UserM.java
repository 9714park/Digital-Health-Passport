package com.hackathon.dhp.models.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@Entity
@Table(name = "USER", uniqueConstraints = {@UniqueConstraint(name = "UK_USER_ID", columnNames = {"USER_ID"})})

public class UserM implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "USER_ID", columnDefinition = "varchar(150)")
    private String userId;

    @Column(name = "NAME", columnDefinition = "varchar(100)")
    private String name;

    @Column(name = "PASSWORD", columnDefinition = "varchar(100)")
    @JsonIgnore
    private String password;

    @Column(name = "HEALTH_CARD_NO", columnDefinition = "varchar(100)")
    private String healthCardNo;

    @Column(name = "CREATED_AT")
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;

    @Column(name = "UPDATED_AT")
    @UpdateTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDateTime updatedAt;
}