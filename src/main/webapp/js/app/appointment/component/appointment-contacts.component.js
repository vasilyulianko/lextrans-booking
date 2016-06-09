define(["jquery", "app/util/template.util", "app/appointment/service/appointment.service", "jquery-ui"], function ($, templateUtil, appointmentService) {

    function loadCities(data) {
        var context = {cities: data};
        templateUtil.mergeTemplate('city-template', 'city-template-placeholder', context);
    }


    function loadTimes(data) {
        var context = {times: data};

        templateUtil.mergeTemplate('time-template', 'time-template-placeholder', context);
    }

    function createAppointment() {
        var appointment = {
            city: {id:1},
            contactFullName: "Vasily Ulianko"
        };

        appointmentService.createAppointment(function(){
            alert("Appointment created");
        }, appointment);
    }


    function init() {
        appointmentService.loadCities(loadCities);
        appointmentService.loadTimes(loadTimes);

        $("#datepicker").datepicker();

        $("#continueButton").click(createAppointment);
    }

    return {
        init: init
    };

});