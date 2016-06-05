import {Injectable} from "@angular/core";


@Injectable()
export class AppointmentService {
    private _citiesUrl = "control/appointment/cities";

    
    getCities() {
        console.log("App service");
    }
}