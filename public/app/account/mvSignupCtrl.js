angular.module('app').controller('mvSignupCtrl', function ($scope, $location, mvUser, mvAuth, Notifier) {

  $scope.signup = function () {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname
    };

    mvAuth.createUser(newUserData).then(function () {
      Notifier.notify('User Account created');
      $location.path('/');
    }, function (reason) {
      Notifier.notify(reason);
    })
  }

});
