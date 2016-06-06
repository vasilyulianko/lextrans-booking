import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

import {Appointment} from "../model/appointment";
import {City} from "../model/city";

@Injectable()
export class AppointmentService {
    private _urlPrefix = "http://localhost:5000/";

    private _citiesUrl = "control/appointment/cities";

    appointment:Appointment = new Appointment();

    constructor(private _http:Http) {

    }

    getCities():Observable<City[]> {
        return this._http.get(this._urlPrefix + this._citiesUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .map((response:Response) => <City[]> response.json())
            .catch((response: Response) => this.handleError(response));
        /*

         return [{
         "id": 1,
         "name": "London"
         }, {
         "id": 2,
         "name": "Dublin"
         }];*/
    }

    getTimes() {
        return [
            {"id": 1, "displayValue": "15:00"},
            {"id": 2, "displayValue": "16:00"},
            {"id": 3, "displayValue": "17:00"}];

    }

    resetAppointment():void {
        this.appointment = new Appointment();
    }

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}