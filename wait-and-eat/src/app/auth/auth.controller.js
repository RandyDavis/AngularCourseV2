(function (){
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$location', '$firebaseAuth', 'FIREBASE_URL'];

    function AuthCtrl ($location, $firebaseAuth, FIREBASE_URL) {
        var vm = this;
        var firebaseReference = new Firebase(FIREBASE_URL);
        var firebaseAuthObject = $firebaseAuth(firebaseReference);


        vm.user = {
            email: '',
            password: ''
        };
        vm.register = register;
        vm.login = login;
        vm.logout = logout;

        function register(user) {
            return firebaseAuthObject.$createUser(user)
                .then(function () {
                    vm.login(user);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

        function login (user) {
            return firebaseAuthObject.$authWithPassword(user)
                .then(function (loggedInUser) {
                    console.log(loggedInUser);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        function logout () {
            console.log('Logging out');
            firebaseAuthObject.$unauth();
            $location.path('/');
        }
    }

})();