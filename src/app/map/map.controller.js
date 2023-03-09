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
        ['$scope', '$state'];

    ////////////

    function MapController($scope, $state) {
        //$scope.categories = categoryService.getCategoryList();
        $scope.doTest = function doTest() {
            //$state.current.views.floatView1 = {
            //    templateUrl: './app/typhoon/typhoon.tpl.html',
            //    controller: 'WeatherController'
            //};
            //
            //$state.$current.views['floatView1@'] = {
            //    templateUrl: './app/typhoon/typhoon.tpl.html',
            //    controller: 'WeatherController'
            //};

            g_cfg.templateUrl = './app/typhoon/typhoon.tpl.html';
            g_cfg.controller = 'TyphoonController';

            $state.reload();
        };

    }

});