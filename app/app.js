'use strict';

var app = angular.module('iaclApp', ['ngRoute', 'LocalStorageModule'])

    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('myApp')
            .setStorageType('localStorage');
    })
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]
);
