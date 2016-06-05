"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var appointment_1 = require("../model/appointment");
var appointment_service_1 = require("../service/appointment.service");
var AppointmentFormContactComponent = (function () {
    function AppointmentFormContactComponent(_appointmentService) {
        this._appointmentService = _appointmentService;
        this.appointment = new appointment_1.Appointment(2, "", 2);
        this.cities = [{
                "id": 1,
                "name": "London"
            }, {
                "id": 2,
                "name": "Dublin"
            }];
        this.times = [
            { "id": 1, "displayValue": "15:00" },
            { "id": 2, "displayValue": "16:00" },
            { "id": 3, "displayValue": "17:00" }];
    }
    AppointmentFormContactComponent.prototype.proceed = function () {
        console.log(JSON.stringify(this.appointment));
    };
    AppointmentFormContactComponent.prototype.ngOnInit = function () {
        this._appointmentService.getCities();
    };
    Object.defineProperty(AppointmentFormContactComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.appointment);
        },
        enumerable: true,
        configurable: true
    });
    AppointmentFormContactComponent = __decorate([
        core_1.Component({
            selector: 'appointment-form-contact',
            templateUrl: 'app/appointment/component/appointment-form-contact.component.html'
        }), 
        __metadata('design:paramtypes', [appointment_service_1.AppointmentService])
    ], AppointmentFormContactComponent);
    return AppointmentFormContactComponent;
}());
exports.AppointmentFormContactComponent = AppointmentFormContactComponent;
//# sourceMappingURL=appointment-form-contact.component.js.map