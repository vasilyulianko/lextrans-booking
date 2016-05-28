package com.lextrans.controller.appointment;

import com.lextrans.service.appointment.AppointmentService;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.model.Appointment;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Controller
@RequestMapping("/control/appointment")
public class AppointmentController {
    private Log log = LogFactory.getLog(AppointmentController.class);

    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private AppointmentRepository appointmentRepository;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    Appointment createAppointment(@RequestBody final Appointment appointment) {
        log.info("Appointment created:" + appointment);
        Appointment appointment1 = appointmentService.createAppointment(appointment);
        return appointment;
    }

    @RequestMapping("/")
    @ResponseBody
    String findAll() {
       return StreamSupport.stream(appointmentRepository.findAll().spliterator(), false).map(Appointment::toString).collect(Collectors.toList()).toString();

    }

}
