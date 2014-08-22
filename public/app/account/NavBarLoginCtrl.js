angular.module('app').controller('NavBarLoginCtrl', function ($scope, $http, Identity, Notifier, mvAuth) {
  $scope.identity = Identity;

  $scope.signin = function (username, password) {
    mvAuth.authenticateUser(username, password).then(function (success) {
      if (success) {
        Notifier.notify('You have successfully signed in!');
      } else {
        Notifier.notify('Username/Password combination incorrect');
      }
    })
  };

});
