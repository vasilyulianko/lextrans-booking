define(["jquery"], function($) {


    var cities = [{id:1, name: "London"}, {id:2, name: "Dublin"}];
    
    function loadCities() {
        return cities;
    }

    function getName() {
        return "vas";
    }
    return {
        getName: getName,
        loadCities: loadCities
    };
    
    
});