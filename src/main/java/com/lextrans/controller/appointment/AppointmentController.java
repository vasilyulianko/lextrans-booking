package com.lextrans.controller.appointment;

import com.lextrans.service.appointment.AppointmentService;
import com.lextrans.service.appointment.dao.AppointmentCityRepository;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.model.Appointment;
import com.lextrans.service.model.AppointmentCity;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Controller
@CrossOrigin(origins = "http://domain2.com", maxAge = 3600)
@RequestMapping("/control/appointment")
public class AppointmentController {
    private Log log = LogFactory.getLog(AppointmentController.class);

    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private AppointmentCityRepository appointmentCityRepository;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    public Appointment createAppointment(@RequestBody final Appointment appointment) {
        log.info("Appointment created:" + appointment);
        Appointment appointment1 = appointmentService.createAppointment(appointment);
        return appointment;
    }

    @RequestMapping("/")
    @ResponseBody
    public String findAll() {
        return StreamSupport.stream(appointmentRepository.findAll().spliterator(), false).map(Appointment::toString).collect(Collectors.toList()).toString();

    }

    @RequestMapping(value = "/cities", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<AppointmentCity> findCities() {
        return appointmentCityRepository.findAll();
    }
}
