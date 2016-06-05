import {Component, OnInit, Input} from '@angular/core'
import {ICity} from "../model/city";
import {Appointment} from "../model/appointment";
import {AppointmentService} from "../service/appointment.service";

@Component({
    selector: 'appointment-form-contact',
    templateUrl: 'app/appointment/component/appointment-form-contact.component.html'

})
export class AppointmentFormContactComponent implements OnInit {

    appointment: Appointment = new Appointment(2, "", 2);

    constructor(private _appointmentService:AppointmentService) {

    }

    cities:ICity[] = [{
        "id": 1,
        "name": "London"
    }, {
        "id": 2,
        "name": "Dublin"
    }];

    times:any[] = [
        {"id": 1, "displayValue": "15:00"},
        {"id": 2, "displayValue": "16:00"},
        {"id": 3, "displayValue": "17:00"}];


    proceed():void {
        console.log(JSON.stringify(this.appointment));
    }

    ngOnInit():void {
        this._appointmentService.getCities();
    }

    get diagnostic(): string {
       return JSON.stringify(this.appointment);
    }
}