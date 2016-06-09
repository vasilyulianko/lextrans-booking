define(["jquery", "app/util/rest.util"], function ($, rest) {

    var CITIES_URI = "control/appointment/cities";
    var TIMES_URI = "control/appointment/times";
    var CREATE_APPOINTMENT_URI = "control/appointment/";

    function loadCities(success, failure) {
        rest.get(CITIES_URI, success);
    }

    function loadTimes(success, failure) {
        rest.get(TIMES_URI, success);
    }


    function createAppointment(success, appointment) {

        rest.postJSON(CREATE_APPOINTMENT_URI, appointment, success);

    }
/*
    function loadContactsStepData(success) {

        $.when(loadCities(), loadTimes()).done(function (citiesResult, timesResult) {
            // the code here will be executed when all four ajax requests resolve.
            // a1, a2, a3 and a4 are lists of length 3 containing the response text,
            // status, and jqXHR object for each of the four ajax calls respectively.

            var result = {
                cities: citiesResult[0],
                times: timesResult[0]
            };
            
            success(result);

        });
        
    }*/

    return {
        loadCities: loadCities,
        loadTimes: loadTimes,
        createAppointment: createAppointment
    };


});