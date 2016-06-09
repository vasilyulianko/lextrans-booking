define(["jquery"], function ($) {

    function postJSON(url, data, callback) {
        return $.ajax({
            'type': 'POST',
            'url': url,
            'contentType': 'application/json',
            'data': JSON.stringify(data),
            'dataType': 'json',
            'success': callback,
            'error': function (response) {
                console.error("ERROR " + JSON.stringify(response));

            }
        });
    }
    
    return {
        postJSON: postJSON
    }

});