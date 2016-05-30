// app.js
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

    // configuring our routes
    // =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.contact', {
                url: '/contact',
                templateUrl: 'form-contact.html'
            })

            // url will be /form/interests
            .state('form.payment', {
                url: '/payment',
                templateUrl: 'form-payment.html'
            })

            // url will be /form/payment
            .state('form.confirmation', {
                url: '/confirmation',
                templateUrl: 'form-confirmation.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/contact');
    })

    // our controller for the form
    // =============================================================================
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');
        };

    });