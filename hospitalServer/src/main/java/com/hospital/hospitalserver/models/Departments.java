package com.hospital.hospitalserver.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "departments")
@ToString @EqualsAndHashCode
public class Departments {
    @Getter
    @Column(name = "id") @Id
    private Long id;


    @Getter
    @Column(name = "departmentName")
    private String departmentName;
}
