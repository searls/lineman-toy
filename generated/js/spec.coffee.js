(function() {
  describe('FooController', function() {
    beforeEach(function() {
      return module('app');
    });
    beforeEach(inject(function($controller, $rootScope) {
      this.scope = $rootScope.$new();
      this.scope.foo = 'Foo';
      return $controller('FooController', {
        $scope: this.scope
      });
    }));
    return describe('sayHi', function() {
      return it('says hi', function() {
        expect(this.scope.sayHi('Mark')).toEqual("Hello Mark");
        return expect(this.scope.sayHi()).toEqual("Hello Foo");
      });
    });
  });

}).call(this);
