define(["jquery", "handlebars", "app/appointment/service/appointment.service"], function ($, Handlebars, appointmentService) {

    console.log(appointmentService.getName());
    var source = $("#booking-contacts-template").html();
    var template = Handlebars.compile(source);
    var context = {city: "Hello world!", body: "Content generated using Handlebars.js template."};
    var html = template(context);
    $("#booking-contacts").html(html);


    


});