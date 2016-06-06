import {Component, OnInit, Input} from '@angular/core'

import {City} from "../model/city";
import {Appointment} from "../model/appointment";
import {AppointmentService} from "../service/appointment.service";

@Component({
    selector: 'appointment-form-contact',
    templateUrl: 'app/appointment/component/appointment-form-contact.component.html'
})
export class AppointmentFormContactComponent implements OnInit {

    appointment: Appointment;
    cities:City[];
    times:any[];
    
    constructor(private _appointmentService: AppointmentService) {
    }

    
    proceed():void {
        console.log(JSON.stringify(this._appointmentService.appointment));
    }

    ngOnInit():void {
        this.appointment = this._appointmentService.appointment;
        this.cities = this._appointmentService.getCities();
        this.times = this._appointmentService.getTimes();
    }

}