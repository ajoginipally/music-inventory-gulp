(function() {
  'use strict';

  describe('Controller: MainController', function(){

    beforeEach(module('musicInventoryGulp'));
    var mainController, scope, songLib;
    beforeEach(inject(function ($controller, $rootScope, _songLib_) {
      scope = $rootScope.$new();
      songLib = _songLib_;
      mainController = $controller('MainController', {
        $scope: scope

      });
    }));
/*
    it('should define more than 5 awesome things', function(){
      expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
      expect(scope.awesomeThings.length > 5).toBeTruthy();
    });
    */
  });
})();
