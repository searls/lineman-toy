@FooController = ($scope) ->

  $scope.sayHi = (name = $scope.foo) ->
    "Hello #{name}"
