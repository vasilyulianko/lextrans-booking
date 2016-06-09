package com.lextrans.controller.appointment;

import com.lextrans.service.appointment.AppointmentService;
import com.lextrans.service.appointment.dao.AppointmentCityRepository;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.appointment.dao.AppointmentTimeRepository;
import com.lextrans.service.model.Appointment;
import com.lextrans.service.model.AppointmentCity;
import com.lextrans.service.model.AppointmentTime;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

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

    @Autowired
    private AppointmentCityRepository appointmentCityRepository;

    @Autowired
    private AppointmentTimeRepository appointmentTimeRepository;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    @ResponseBody
    public Appointment createAppointment(@RequestBody final Appointment appointment) {
        log.info("Appointment created:" + appointment);
        Appointment appointment1 = appointmentService.createAppointment(appointment);
        return appointment;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<Appointment> findAll() {
        return appointmentRepository.findAll();
    }

    @RequestMapping(value = "/cities", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<AppointmentCity> findCities() {
        return appointmentCityRepository.findAll();
    }

    @RequestMapping(value = "/times", method = RequestMethod.GET)
    @ResponseBody
    public Iterable<AppointmentTime> findTimes() {
        return appointmentTimeRepository.findAll();
    }
}
