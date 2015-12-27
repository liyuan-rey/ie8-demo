// map.module.js

define([
    'angular',
    'angular-ui-router',
    '../typhoon/typhoon.module'
], function (ng) {
    'use strict';

    return ng.module('app.map', ['ui.router', 'app.typhoon']);
});