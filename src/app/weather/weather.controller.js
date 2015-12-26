// weather.controller.js

define([
    'angular',
    './weather.module'
], function (ng) {
    'use strict';

    ng
        .module('app.weather')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject =
        ['$scope'];

    ////////////

    function WeatherController($scope) {
        //$scope.categories = categoryService.getCategoryList();
    }

});