import {Component} from 'angular2/core';
import {AppointmentFormComponent} from "./appointment/appointment-form.component";

@Component({
    selector: 'lb-app',
    template: '<appointment-form></appointment-form>',
    directives: [AppointmentFormComponent]
})
export class AppComponent { }