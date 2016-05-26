package com.lextrans.service.appointment;

import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.appointment.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    public Appointment createAppointment(Appointment appointment) {


        Appointment appointment1 = new Appointment();
        appointment1.setName("Vasily");

        Appointment saved = appointmentRepository.save(appointment);

        return saved;
    }

}
