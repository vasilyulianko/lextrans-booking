import {Component} from '@angular/core';
import {HTTP_PROVIDERS}  from '@angular/http'
import 'rxjs/Rx';

import {AppointmentFormComponent} from "./appointment/component/appointment-form.component";

@Component({
    selector: 'lb-app',
    template: '<appointment-form></appointment-form>',
    directives: [AppointmentFormComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    
}