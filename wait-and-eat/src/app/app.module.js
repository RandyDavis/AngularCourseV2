/**
 * Created by randy on 2/1/16.
 */
(function() {
    'use strict';

    angular
        .module('app', [
        // Angular Modules
        'ngRoute',

        // 3rd Party Modules
        'firebase',

        // Custom Modules
        'app.auth',
        'app.core',
        'app.landing',
        'app.waitList'
    ]);
})();