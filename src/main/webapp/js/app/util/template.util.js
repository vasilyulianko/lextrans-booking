define(["jquery", "handlebars"], function ($, Handlebars) {

    function mergeTemplate(templateElementId, targetElementId, contextObject) {
        var source = $("#" + templateElementId).html();
        var template = Handlebars.compile(source);
        var html = template(contextObject);
        $("#" + targetElementId).html(html);

    }

    return {
        mergeTemplate: mergeTemplate
    }

});