import {Component} from '@angular/core'
import {AppointmentFormContactComponent} from "./appointment-form-contact.component";
import {AppointmentService} from "../service/appointment.service";

@Component({
    selector: 'appointment-form',
    templateUrl: 'app/appointment/component/appointment-form.component.html',
    directives: [AppointmentFormContactComponent],
    providers: [AppointmentService]
})
export class AppointmentFormComponent {

    constructor(private _appointmentService: AppointmentService) {
        
    }

    get diagnostic(): string {
        return JSON.stringify(this._appointmentService.appointment);
    }
}