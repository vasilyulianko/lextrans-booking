define(["jquery", "app/util/template.util", "app/appointment/service/appointment.service", "jquery-ui"], function ($, templateUtil, appointmentService) {

    function loadCities(data) {
        var context = {cities: data};
        templateUtil.mergeTemplate('city-template', 'city-template-placeholder', context);
    }


    function loadTimes(data) {
        var context = {times: data};

        templateUtil.mergeTemplate('time-template', 'time-template-placeholder', context);
    }

    function constructDateTime(date, time) {
        return date + 'T' + time + ':00'; //2012-04-23T18:25:00
    }

    function validate() {
        //TODO
        return true;
    }

    function createAppointment() {
        if(!validate()) {
            return;
        }

        var cityId = $("#city").val();
        var date = $("#alt-date").val();
        var time = $("#time option:selected").text();

        var dateTime = constructDateTime(date, time);

        var contactFullName = $("#contactFullName").val();
        var timePreference = $("#timePreference").val();
        var contactAddressLine1 = $("#contactAddressLine1").val();
        var contactPostCode = $("#contactPostCode").val();
        var contactMobile = $("#contactMobile").val();
        var contactEmail = $("#contactEmail").val();

        var appointment = {
            city: {id: cityId},
            dateTime: dateTime,
            timePreference: timePreference,
            contactFullName: contactFullName,
            contactAddressLine1: contactAddressLine1,
            contactPostCode: contactPostCode,
            contactMobile: contactMobile,
            contactEmail: contactEmail
        };

        appointmentService.createAppointment(function () {
            alert("Appointment created");
        }, appointment);
    }


    function init() {
        appointmentService.loadCities(loadCities);
        appointmentService.loadTimes(loadTimes);

        $("#datepicker").datepicker({
            constrainInput: true,   // prevent letters in the input field
            minDate: new Date(),    // prevent selection of date older than today
            //showOn: 'button',       // Show a button next to the text-field
            autoSize: true,         // automatically resize the input field
            dateFormat: 'dd-MM-yy',
            altFormat: 'yy-mm-dd',  // Date Format used
            altField: "#alt-date",
            //beforeShowDay: $.datepicker.noWeekends,     // Disable selection of weekends
            firstDay: 1 // Start with Monday
        });

        $("#continueButton").click(createAppointment);
    }

    return {
        init: init
    };

});