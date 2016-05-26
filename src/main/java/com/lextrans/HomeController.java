package com.lextrans;

import com.lextrans.service.appointment.AppointmentService;
import com.lextrans.service.appointment.dao.AppointmentRepository;
import com.lextrans.service.appointment.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Created by vasilyulianko on 26/05/2016.
 */
@Controller
public class HomeController {

    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private AppointmentRepository appointmentRepository;

    @RequestMapping("/")
    @ResponseBody
    String home() {
       return "Home";
    }

}
