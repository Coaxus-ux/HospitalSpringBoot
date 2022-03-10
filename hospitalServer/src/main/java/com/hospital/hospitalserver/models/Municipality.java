package com.hospital.hospitalserver.models;
import lombok.Getter;
import javax.persistence.*;

@Entity
@Table(name = "municipality")
public class Municipality {
    @Id
    @Getter
    @Column(name = "id")
    private Long id;

    @Getter
    @Column (name = "municipalityName")
    private String municipalityName;

    @Getter
    @Column (name = "departmentId")
    private int departmentId;

    @Getter
    @Column (name = "state")
    private int state;
}
