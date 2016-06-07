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
var appointment_service_1 = require("../service/appointment.service");
var datepicker_directive_1 = require("../../shared/directive/datepicker.directive");
var AppointmentFormContactComponent = (function () {
    function AppointmentFormContactComponent(_appointmentService) {
        this._appointmentService = _appointmentService;
    }
    AppointmentFormContactComponent.prototype.proceed = function () {
        console.log(JSON.stringify(this._appointmentService.appointment));
    };
    AppointmentFormContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appointment = this._appointmentService.appointment;
        this._appointmentService.getCities()
            .subscribe(function (cities) { return _this.cities = cities; }, function (error) { return _this.errorMessage = error; });
        this.times = this._appointmentService.getTimes();
    };
    AppointmentFormContactComponent.prototype.checkDates = function (e) {
        console.log("Please, catch the change event ): " + e);
    };
    AppointmentFormContactComponent = __decorate([
        core_1.Component({
            selector: 'appointment-form-contact',
            templateUrl: 'app/appointment/component/appointment-form-contact.component.html',
            directives: [datepicker_directive_1.DatepickerDirective]
        }), 
        __metadata('design:paramtypes', [appointment_service_1.AppointmentService])
    ], AppointmentFormContactComponent);
    return AppointmentFormContactComponent;
}());
exports.AppointmentFormContactComponent = AppointmentFormContactComponent;
//# sourceMappingURL=appointment-form-contact.component.js.map