package com.lextrans.service.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Data
@Entity
@Table(
        indexes = {@Index(name = "reference_idx", columnList = "reference", unique = true)})
public class Appointment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String reference;

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    private AppointmentCity city;

/*
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
*/
    private LocalDateTime dateTime;

    private String timePreference;

    private String reason;

    private String propertyDetails;

    @Enumerated(EnumType.STRING)
    private PropertyOwnershipType propertyOwnershipType;

    private Boolean hasMortgage;

    private String contactFullName;

    private String contactAddressLine1;

    private String contactPostCode;

    private String contactMobile;

    private String contactEmail;

    @OneToMany(mappedBy = "appointment")
    private List<AppointmentPerson> persons;

    private String comments;

    private LocalDateTime createdDateTime;

    private LocalDateTime modifiedDateTime;

    public List<AppointmentPerson> attorneys() {
        return persons.stream().filter(p -> p.getRole().equals(PersonRole.ATTORNEY)).collect(Collectors.toList());
    }

    public List<AppointmentPerson> principals() {
        return persons.stream().filter(p -> p.getRole().equals(PersonRole.PRINCIPAL)).collect(Collectors.toList());
    }
}
