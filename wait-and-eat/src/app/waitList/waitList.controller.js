(function () {
    'use strict';

    angular.module('app.waitList')
        .controller('WaitListCtrl', WaitListCtrl);

    WaitListCtrl.$inject = ['$firebaseArray'];


    function WaitListCtrl ($firebaseArray) {
        var vm = this;

        var fireParties = new Firebase('https://waitandeat-v2-randy.firebaseio.com/parties');

        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;

        function Party () {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }

        function addParty () {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
        }

    }

})();