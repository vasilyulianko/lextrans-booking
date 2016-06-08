define(["jquery", "handlebars", "app/appointment/service/appointment.service"], function ($, Handlebars, appointmentService) {

    function render() {
        var source = $("#appointment-contacts-template").html();
        var template = Handlebars.compile(source);

        var cities = appointmentService.loadCities();

        var context = {cities: cities};
        console.log(context);

        var html = template(context);
        $("#appointment-contacts").html(html);

    }

    function init() {
        render();
    }

    return {
        init: init
    };

});