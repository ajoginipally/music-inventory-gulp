(function () {
    'use strict';

    describe('Controller: MainController', function () {

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

            it('should attach a list of songs to the scope', function () {
                expect(scope.songs).toBeDefined();
            });


        describe("function: addSong(song, genre)", function () {
            beforeEach(function () {
                spyOn(songLib, 'addSong').and.callFake(function () {
                    return;
                });
            });

            it('should call the addSong function when the button is pressed', function () {
                scope.addSong("lean on", "pop");
                expect(songLib.addSong).toHaveBeenCalled();
            });

        });

        describe("function: removeSong(i)", function () {
            beforeEach(function () {
                spyOn(songLib, 'removeSong').and.callFake(function () {
                    return;
                });
            });

            it('should call the removeSong function when the button is pressed', function () {
                scope.removeSong(1);
                expect(songLib.removeSong).toHaveBeenCalled();
            });

        });


    });
})();