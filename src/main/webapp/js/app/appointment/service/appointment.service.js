define(["jquery"], function($) {


    var privateVar = [{id:1, name: "London"}];

    function privateFunction() {
        return privateVar;
    }

    function getCities() {
        return privateVar;
    }

    function getName() {
        return "vas";
    }
    return {
        getName: getName,
        getCities: getCities
    };
    
    
    
});