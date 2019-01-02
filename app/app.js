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
            templateUrl: 'views/page-about.html',
            controller: 'aboutController'
           
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
        .when('/layanan-brca',{
            templateUrl : 'views/page-brca.html'
        })
        .otherwise({
            redirectTo : "/"
        });

}]);
