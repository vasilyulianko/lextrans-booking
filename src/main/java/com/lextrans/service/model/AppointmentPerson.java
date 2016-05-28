package com.lextrans.service.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * Created by vasily on 28/05/2016.
 */
@Data
@Entity
public class AppointmentPerson implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Appointment appointment;

    @Enumerated(EnumType.STRING)
    private PersonRole role;

    private String fullName;

    private String parentNames;

    private String pesel;

    @Enumerated(EnumType.STRING)
    private PersonDocumentType documentType;

    private String documentNumber;

    private LocalDate documentExpiryDate;


}
