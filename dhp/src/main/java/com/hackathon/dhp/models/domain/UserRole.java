package com.hackathon.dhp.models.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hackathon.dhp.models.enums.UserRoleEnum;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Builder(toBuilder = true)
@EqualsAndHashCode
@Getter
@Setter
@DynamicInsert
@DynamicUpdate
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "USER_ROLE", uniqueConstraints = {@UniqueConstraint(name = "UK_USER_NO_ROLE_NM", columnNames = {"USER_ID", "ROLE_NAME"})})
public class UserRole implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", foreignKey = @ForeignKey(name = "FK_USER_ROLE__USER_M"))
    private UserM user;

    @Column(name = "ROLE_NAME")
    @Enumerated(EnumType.STRING)
    private UserRoleEnum roleName;

    @Column(name = "CREATED_AT")
    @CreationTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;

    @Column(name = "UPDATED_AT")
    @UpdateTimestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDateTime updatedAt;
}
