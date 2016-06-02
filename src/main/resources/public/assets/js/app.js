// app.js
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('lextransBookingApp', ['ngAnimate', 'ui.router'])

    // configuring our routes
    // =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        // route to show our basic form (/form)
            .state('appointment', {
                url: '/appointment',
                templateUrl: 'form.html',
                controller: 'appointmentFormController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('appointment.contact', {
                url: '/contact',
                templateUrl: 'form-contact.html'
            })

            // url will be /form/interests
            .state('appointment.payment', {
                url: '/payment',
                templateUrl: 'form-payment.html'
            })

            // url will be /form/payment
            .state('appointment.confirmation', {
                url: '/confirmation',
                templateUrl: 'form-confirmation.html'
            });

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/appointment/contact');
    })

    // our controller for the form
    // =============================================================================
    .controller('appointmentFormController', function($scope) {

        // we will store all of our form data in this object
        $scope.appointmentForm = {};

        // function to process the form
        $scope.processForm = function() {
            alert('awesome!');
        };

    });