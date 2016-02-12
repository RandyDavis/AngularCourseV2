(function () {
    'use strict';

    angular.module('app.waitList')
        .controller('WaitListCtrl', WaitListCtrl);

    WaitListCtrl.$inject = ['$firebaseArray', 'FIREBASE_URL'];


    function WaitListCtrl ($firebaseArray, FIREBASE_URL) {
        var vm = this;

        var fireParties = new Firebase('FIREBASE_URL' + 'parties');
        var fireTextMessages = new Firebase('FIREBASE_URL' + 'textMessages');

        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        vm.toggleDone = toggleDone;

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

        function removeParty (party) {
            vm.parties.$remove(party);
        }

        function sendTextMessage (party) {
            var newTextMessage = {
                phoneNumber: party.phone,
                size: party.size,
                name: party.name
            };
            fireTextMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party);
        }

        function toggleDone (party) {
            vm.parties.$save(party);
        }
    }

})();