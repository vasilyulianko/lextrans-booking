package com.lextrans.controller.appointment;

import com.lextrans.service.appointment.AppointmentService;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.appointment.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Controller
@RequestMapping("/control/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private AppointmentRepository appointmentRepository;

    @RequestMapping("/{name}")
    @ResponseBody
    String createAppointment(@PathVariable(value="name") final String name) {
        Appointment appointment = new Appointment();
        appointment.setName(name);
        Appointment appointment1 = appointmentService.createAppointment(appointment);
        return appointment.toString();
    }

    @RequestMapping("/")
    @ResponseBody
    String findAll() {
       return StreamSupport.stream(appointmentRepository.findAll().spliterator(), false).map(Appointment::toString).collect(Collectors.toList()).toString();

    }

}
