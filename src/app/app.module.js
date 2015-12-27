// app.module.js

define([
    'angular',
    'angular-ui-router',
    './map/map.module',
    './ships/ships.module',
    './typhoon/typhoon.module',
    './weather/weather.module'
], function (ng) {
    'use strict';

    return ng
        .module('app', ['ui.router', 'app.map', 'app.ships', 'app.typhoon', 'app.weather'])
        .run(function ($rootScope) {
            $rootScope.$on("$stateChangeError", console.log.bind(console));
        });
});