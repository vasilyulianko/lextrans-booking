package com.lextrans.service.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Created by vasily on 28/05/2016.
 */
@Data
@Entity
public class AppointmentPayment implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal prePayment;

    private BigDecimal remainder;

    private BigDecimal totalPrice;

    private Boolean termsAccepted;

    private BigDecimal prePaymentPaid;

    private BigDecimal remainderPaid;

}
