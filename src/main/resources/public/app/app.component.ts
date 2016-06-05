import {Component} from '@angular/core';
import {AppointmentFormComponent} from "./appointment/component/appointment-form.component";

@Component({
    selector: 'lb-app',
    template: '<appointment-form></appointment-form>',
    directives: [AppointmentFormComponent]
})
export class AppComponent { }