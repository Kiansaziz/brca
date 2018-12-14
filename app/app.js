// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/page-home.html',
            controller:'homeController'
        })

        // about page
        .when('/blog', {
            templateUrl: 'views/page-about.html',
            controller: 'aboutController'
        })

        // contact page
        .when('/layanan-hcs', {
            templateUrl: 'views/page-hcs.html',
            controller: 'hcsController'
        });

});
