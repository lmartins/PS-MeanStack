angular.module('app').controller('NavBarLoginCtrl', function ($scope, $http, $location, Identity, Notifier, mvAuth) {
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

  $scope.signout = function () {
    mvAuth.logoutUser().then(function () {
      $scope.username = "";
      $scope.password = "";
      Notifier.notify('Logged of');
      $location.path('/');
    })
  }

});
