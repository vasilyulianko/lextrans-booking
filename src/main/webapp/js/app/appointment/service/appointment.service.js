define(["jquery"], function ($) {

    var CITIES_URI = "control/appointment/cities";
    var TIMES_URI = "control/appointment/times";

    function loadCities(success, failure) {
        var jqxhr = $.get(CITIES_URI)
            .done(success)
            .fail(failure);
        return jqxhr;
    }

    function loadTimes(success, failure) {
        var jqxhr = $.get(TIMES_URI)
            .done(success)
            .fail(failure);
        return jqxhr;
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
        loadTimes: loadTimes

    };


});