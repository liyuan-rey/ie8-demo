// app.routes.js

var g_cfg = {
    templateUrl: './app/weather/weather.tpl.html',
    controller: 'WeatherController'
};

define([
    'angular',
    'angular-ui-router',
    './app.module'
], function (ng) {
    'use strict';

    ng
        .module('app')
        .config(configure);

    configure.$inject =
        ['$stateProvider', '$urlRouterProvider'];

    ////////////

    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('default', {
                url: '/default',
                views: {
                    'mainView': {
                        templateUrl: './app/map/map.tpl.html',
                        controller: 'MapController'
                    },
                    'floatView1': g_cfg,
                    'floatView2': {
                        templateUrl: './app/ships/ships.tpl.html',
                        controller: 'ShipsController'
                    }
                }
            });
        $urlRouterProvider
        //.when('', 'archDemo')
            .otherwise('/default');
    }
});