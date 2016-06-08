define(function () {


    var privateVar = "Alex Castrounis",
        publicVar  = "Hi!";

    function privateFunction() {
        console.log( "Name:" + privateVar );
        return privateVar;
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
    
    
    
});