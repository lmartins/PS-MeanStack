angular.module('app').value('Toastr', toastr);
angular.module('app').factory('Notifier', function (Toastr) {
  return {
    notify: function (msg) {
      Toastr.success(msg);
      console.log(msg);
    }
  }
})
