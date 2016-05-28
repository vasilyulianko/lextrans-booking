package com.lextrans.service.appointment;

import com.lextrans.service.appointment.dao.AppointmentCityRepository;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.model.Appointment;
import com.lextrans.service.model.AppointmentCity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

        return appointmentRepository.save(appointment);
    }

}
