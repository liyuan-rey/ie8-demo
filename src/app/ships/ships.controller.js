// ships.controller.js

define([
    'angular',
    './ships.module'
], function (ng) {
    'use strict';

    ng
        .module('app.ships')
        .controller('ShipsController', ShipsController);

    ShipsController.$inject =
        ['$scope'];

    ////////////

    function ShipsController($scope) {
        //$scope.categories = categoryService.getCategoryList();
    }

});