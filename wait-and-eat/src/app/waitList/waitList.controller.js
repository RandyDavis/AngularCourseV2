(function () {
    'use strict';

    angular.module('app.waitList')
        .controller('WaitListCtrl', WaitListCtrl);

    WaitListCtrl.$inject = ['$firebaseArray'];


    function WaitListCtrl ($firebaseArray) {
        var vm = this;

        var fireParties = new Firebase('enter firebase url here');

        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;

        function addParty () {
            vm.parties.$add('another');
        }

    }

})();