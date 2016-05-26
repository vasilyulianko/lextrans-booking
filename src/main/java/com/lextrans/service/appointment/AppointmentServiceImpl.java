package com.lextrans.service.appointment;

import com.lextrans.service.appointment.model.Appointment;
import org.springframework.stereotype.Service;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Override
    public Appointment createAppointment(Appointment appointment) {
        Appointment appointment1 = new Appointment();

        appointment.setAddress("");
        return new Appointment();
    }

}
