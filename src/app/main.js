// main.js

(function () {
    'use strict';

    require.config({
        //baseUrl: '',

        paths: {
            'domReady': '../../node_modules/requirejs-domready/domReady',
            'angular': '../../node_modules/angular/angular',
            'angular-ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router',
            'angular-ui-bootstrap': '../../node_modules/angular-ui-bootstrap/ui-bootstrap-tpls',
            //
            //'app': './app',
            //'category-module': './category/category.module.js',
            //'product-module': './product/product.module.js'
        },

        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-ui-router' : {
                deps: ['angular']
                // ,exports: 'ui.router'
            },
            'angular-ui-bootstrap' : {
                deps: ['angular']
                // ,exports: 'ui.router'
            }
        }
    });

    require([
        'domReady',

        'angular',
        'angular-ui-router',

        './app.module',
        './app.routes',

        './map/map.index',
        './ships/ships.index',
        './typhoon/typhoon.index',
        './weather/weather.index'
    ], startApplication);

    function startApplication (domReady, ng) {
        domReady(function () {
            ng.bootstrap(document, ['app']);
        })
    }

})();