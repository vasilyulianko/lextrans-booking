define(["jquery", "app/util/template.util", "app/appointment/service/appointment.service", "jquery-ui"], function ($, templateUtil, appointmentService) {
    
    function logError(e) {
        console.error(e);
    }

    
    function loadTemplate(data) {
        templateUtil.mergeTemplate('appointment-contacts-template', 'appointment-contacts', data);

        $("#datepicker").datepicker();
    }

    function init() {
        appointmentService.loadContactsStepData(
            loadTemplate,
            logError
        );
    }

    return {
        init: init
    };

});