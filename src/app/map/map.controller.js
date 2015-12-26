// map.controller.js

define([
    'angular',
    './map.module'
], function (ng) {
    'use strict';

    ng
        .module('app.map')
        .controller('MapController', MapController);

    MapController.$inject =
        ['$scope'];

    ////////////

    function MapController($scope) {
        //$scope.categories = categoryService.getCategoryList();
    }

});