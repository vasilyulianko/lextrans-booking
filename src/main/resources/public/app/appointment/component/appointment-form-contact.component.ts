import {Component, OnInit, Input} from '@angular/core'

import {City} from "../model/city";
import {Appointment} from "../model/appointment";
import {AppointmentService} from "../service/appointment.service";
import {DatepickerDirective} from "../../shared/directive/datepicker.directive";
declare var jQuery:any;

@Component({
    selector: 'appointment-form-contact',
    templateUrl: 'app/appointment/component/appointment-form-contact.component.html',
    directives: [DatepickerDirective]
})
export class AppointmentFormContactComponent implements OnInit {
    errorMessage;
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
        this._appointmentService.getCities()
            .subscribe(
                cities => this.cities = cities,
                error => this.errorMessage = <any> error
            );


        this.times = this._appointmentService.getTimes();
    }

    chooseDate(e){
        this.appointment.date = e;
    }
}