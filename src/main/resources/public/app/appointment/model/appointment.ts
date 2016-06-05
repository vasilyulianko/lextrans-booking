export class Appointment {
    constructor(
        public cityId?:number,
        public date?:string,
        public timeId?:number,
        public preferences?:string,
        public name?:string,
        public addressLine1?:string,
        public postcode?:string,
        public mobile?:string,
        public email?:string
    ){ }
}