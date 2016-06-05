import {Component} from '@angular/core'
import {AppointmentFormContactComponent} from "./appointment-form-contact.component";
import {Appointment} from "../model/appointment";
import {AppointmentService} from "../service/appointment.service";

@Component({
    selector: 'appointment-form',
    templateUrl: 'app/appointment/component/appointment-form.component.html',
    directives: [AppointmentFormContactComponent],
    providers: [AppointmentService]
})
export class AppointmentFormComponent {

    appointment: Appointment = new Appointment();

    constructor(private _appointmentService: AppointmentService) {

    }

}