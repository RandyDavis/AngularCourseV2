(function () {
    'use strict';

    angular.module('app.waitList')
        .controller('WaitListCtrl', WaitListCtrl);


    function WaitListCtrl () {
        var vm = this;

        vm.parties = [1, 2, 3, 4];

    }

})();