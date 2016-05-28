package com.lextrans.service.appointment.dao;

import com.lextrans.service.model.Appointment;
import com.lextrans.service.model.AppointmentCity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Transactional
public interface AppointmentCityRepository extends PagingAndSortingRepository<AppointmentCity, Long> {

    List<Appointment> findByName(String name);

}
