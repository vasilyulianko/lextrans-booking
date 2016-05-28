package com.lextrans.tests;

import com.lextrans.service.model.Appointment;
import com.lextrans.service.model.AppointmentCity;

/**
 * Created by vasily on 28/05/2016.
 */
public class TestHelper {

    public Appointment defaultAppointment() {
        Appointment appointment = new Appointment();

        appointment.setCity(defaultAppointmentCity());
        appointment.setName("Name");
        appointment.setContactFullName("Vasily Ulianko");
        appointment.setContactAddressLine1("Address 1");
        appointment.setContactPostCode("FR345");
        appointment.setContactMobile("23467844");
        appointment.setContactEmail("email@gmail.com");

        return appointment;
    }


    public AppointmentCity defaultAppointmentCity() {
        AppointmentCity appointmentCity = new AppointmentCity();
        appointmentCity.setId(1L);
        return appointmentCity;
    }
}
