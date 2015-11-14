'use strict';

angular.module('iaclApp', ['LocalStorageModule']).config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('myApp')
        .setStorageType('localStorage');
});
