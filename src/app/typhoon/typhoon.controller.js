// typhoon.controller.js

define([
    'angular',
    './typhoon.module'
], function (ng) {
    'use strict';

    ng
        .module('app.typhoon')
        .controller('TyphoonController', TyphoonController);

    TyphoonController.$inject =
        ['$scope'];

    ////////////

    function TyphoonController($scope) {
        //$scope.categories = categoryService.getCategoryList();
    }

});