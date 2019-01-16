// app.js

// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(["$routeProvider",function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/page-home.html',
            controller:'homeController'
         
        })

        // Blog page
        .when('/blog', {
            templateUrl: 'views/page-blog.html',
            controller: 'blogController'
           
        })

        // HCS page
        .when('/layanan-hcs', {
            templateUrl: 'views/page-hcs.html',
            controller: 'hcsController'
        })
        //HCS detail
        .when('/layanan-detail-hcs',{
            templateUrl: 'views/page-detail-hcs.html',
            controller  : 'hcsController'
        })
        //HCS hasil
        .when('/layanan-detail-hasil-hcs', {
            templateUrl: 'views/page-tentang-hasil.html',
            controller : 'hcsController'
        })
        //layanan-brca
        .when('/layanan-brca',{
            templateUrl : 'views/page-brca.html',
            controller: 'brcaController'
        })

        //layanan-sma
        .when('/layanan-sma', {
            templateUrl : 'views/page-sma.html',
            controller : 'smaController'
        })

        //layanan-detail-sma
        .when('/layanan-detail-sma',{
            templateUrl :"views/page-detail-sma.html",
            controller : 'smaController'
        })


        //contact
        .when('/contact',{
            templateUrl : 'views/page-contact.html',
            controller : 'contactController'
        })
        .otherwise({
            redirectTo : "/"
        });

}]);
