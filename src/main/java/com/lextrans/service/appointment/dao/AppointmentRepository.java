package com.lextrans.service.appointment.dao;

import com.lextrans.service.appointment.model.Appointment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by vasilyulianko on 26/05/2016.
 */

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {

    List<Appointment> findByName(String name);

}
