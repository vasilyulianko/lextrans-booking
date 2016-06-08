define(["jquery", "handlebars", "app/appointment/service/appointment.service"], function ($, Handlebars, appointmentService) {

    function render() {
        var source = $("#appointment-contacts-template").html();
        var template = Handlebars.compile(source);

        var context = {city: "Hello world!", body: "Content generated using Handlebars.js template."};
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