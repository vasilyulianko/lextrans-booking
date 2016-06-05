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
var appointment_form_contact_component_1 = require("./appointment-form-contact.component");
var appointment_service_1 = require("../service/appointment.service");
var AppointmentFormComponent = (function () {
    function AppointmentFormComponent(_appointmentService) {
        this._appointmentService = _appointmentService;
    }
    AppointmentFormComponent = __decorate([
        core_1.Component({
            selector: 'appointment-form',
            templateUrl: 'app/appointment/component/appointment-form.component.html',
            directives: [appointment_form_contact_component_1.AppointmentFormContactComponent],
            providers: [appointment_service_1.AppointmentService]
        }), 
        __metadata('design:paramtypes', [appointment_service_1.AppointmentService])
    ], AppointmentFormComponent);
    return AppointmentFormComponent;
}());
exports.AppointmentFormComponent = AppointmentFormComponent;
//# sourceMappingURL=appointment-form.component.js.map