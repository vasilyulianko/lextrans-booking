import {Component} from 'angular2/core'

@Component({
    selector: 'appointment-form-contact',
    templateUrl: 'app/appointment/appointment-form-contact.component.html',

})
export class AppointmentFormContactComponent {
    cities: any[] = [{
        "id": 1,
        "name": "London"
    }, {
        "id": 2,
        "name": "Dublin"
    }];

    times: string[] = ["15:00", "16:00", "17:00"]


    

}