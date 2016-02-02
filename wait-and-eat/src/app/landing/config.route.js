/**
 * Created by randy on 2/1/16.
 */
(function () {
    'use strict';

    angular
        .module('app.landing')
        .config(configFunction)

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/landing/landing.html'
            })
    }

})();