(function() {
  this.App = angular.module('app', ['ngResource', 'ngRoute']);

}).call(this);

(function() {
  this.FooController = function($scope) {
    return $scope.sayHi = function(name) {
      if (name == null) {
        name = $scope.foo;
      }
      return "Hello " + name;
    };
  };

}).call(this);
