
angular.module('ae', ['ae.directives']).controller('AppController', function () {
  this.data = {
    test: 42
  }
});


angular.module('ae.directives', [])
  .directive('classController', function () {

    class Controller {

      constructor() {
        console.log('hello', this);
      }


      foo() {
        console.log(this.firstName, 'clicked me!!!!');
      }

    }


    return {
      restrict: 'E',
      templateUrl: 'templates/classController.tpl.html',
      scope: {
        firstName: '@',
        data: '='
      },
      controller: Controller,
      controllerAs: 'cn',
      bindToController: true
    };
  });
