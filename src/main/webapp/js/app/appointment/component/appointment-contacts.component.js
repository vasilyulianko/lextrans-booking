define(["jquery", "app/util/template.util", "app/appointment/service/appointment.service", "jquery-ui"], function ($, templateUtil, appointmentService) {

    function loadCities(data) {
        var context = {cities: data};
        templateUtil.mergeTemplate('city-template', 'city-template-placeholder', context);
    }


    function loadTimes(data) {
        var context = {times: data};

        templateUtil.mergeTemplate('time-template', 'time-template-placeholder', context);
    }

    function init() {
        appointmentService.loadCities(loadCities);
        appointmentService.loadTimes(loadTimes);


        appointmentService.createAppointment(function(){});

        $("#datepicker").datepicker();

    }

    return {
        init: init
    };

});