// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        "jquery-ui": "//code.jquery.com/ui/1.11.4/jquery-ui.min",
        "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min",
        "handlebars": "//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.amd.min"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);