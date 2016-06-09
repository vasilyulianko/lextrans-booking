define(["jquery", "app/util/template.util", "app/appointment/service/appointment.service", "jquery-ui"], function ($, templateUtil, appointmentService) {
    
    function logError(e) {
        console.error(e);
    }

    
    function loadTemplates(data) {
        templateUtil.mergeTemplate('city-template', 'city-template-placeholder', data);
        templateUtil.mergeTemplate('time-template', 'time-template-placeholder', data);

        $("#datepicker").datepicker();
    }

    function init() {
        appointmentService.loadContactsStepData(
            loadTemplates,
            logError
        );
    }

    return {
        init: init
    };

});