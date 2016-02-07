(function (){
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$firebaseAuth'];

    function AuthCtrl ($firebaseAuth) {
        var vm = this;

        vm.register = register;

        function register(user) {

        }


    }


})();