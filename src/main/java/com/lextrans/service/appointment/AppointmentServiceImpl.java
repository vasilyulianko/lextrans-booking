package com.lextrans.service.appointment;

import com.lextrans.service.appointment.dao.AppointmentCityRepository;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.model.Appointment;
import com.lextrans.service.model.AppointmentCity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private AppointmentCityRepository appointmentCityRepository;

    @Override
    public Appointment createAppointment(Appointment appointment) {
        AppointmentCity city = appointmentCityRepository.findOne(appointment.getCity().getId());

        appointment.setCity(city);

        LocalDateTime now = LocalDateTime.now();
        appointment.setCreatedDateTime(now);
        appointment.setModifiedDateTime(now);
        return appointmentRepository.save(appointment);
    }

}
