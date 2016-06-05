
export interface IAppointment {
    cityId: number;
    date: string;
    timeId: number;
    preferences: string;
    name: string;
    addressLine1: string;
    postcode: string;
    mobile: string;
    email: string;
}

export class Appointment implements IAppointment{
    cityId:number;
    date:string;
    timeId:number;
    preferences:string;
    name:string;
    addressLine1:string;
    postcode:string;
    mobile:string;
    email:string;
    
}