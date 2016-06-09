define(["jquery"], function ($) {

    var _CITIES_URI = "control/appointment/cities";

    var cities = [{id: 1, name: "London"}, {id: 2, name: "Dublin"}];
    
    function loadCities() {
        var jqxhr = $.get(_CITIES_URI);
        return jqxhr;
    }

    function loadTimes() {
        return [{id: "11:13", displayValue: "11:13"},
            {id: "11:30", displayValue: "11:30"}]
    }

    function loadContactsStepData(success) {

        $.when(loadCities(), loadTimes()).done(function (citiesResult, timesResult) {
            // the code here will be executed when all four ajax requests resolve.
            // a1, a2, a3 and a4 are lists of length 3 containing the response text,
            // status, and jqXHR object for each of the four ajax calls respectively.

            var result = {
                cities: citiesResult[0],
                times: timesResult
            };
            
            success(result);

        });
        
    }

    return {
        loadContactsStepData: loadContactsStepData
    };


});