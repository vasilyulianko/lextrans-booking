import {Injectable} from "@angular/core";
import {Appointment} from "../model/appointment";


@Injectable()
export class AppointmentService {
    private _citiesUrl = "control/appointment/cities";

    appointment: Appointment = new Appointment();
    
    getCities() {

        return [{
            "id": 1,
            "name": "London"
        }, {
            "id": 2,
            "name": "Dublin"
        }];
    }

    getTimes() {
        return [
            {"id": 1, "displayValue": "15:00"},
            {"id": 2, "displayValue": "16:00"},
            {"id": 3, "displayValue": "17:00"}];

    }
    
    resetAppointment(): void {
        this.appointment = new Appointment();
    }
}