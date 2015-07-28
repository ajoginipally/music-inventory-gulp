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
           expect(songLib.getSongs().length).toBe(3);
           /*     spyOn(songLib, 'addSong').and.callFake(function () {
                    return;
                });*/
            });

            it('should call the addSong function when the button is pressed', function () {
                scope.addSong("lean on", "pop");
              expect(songLib.getSongs().length).toBe(4);
              expect(songLib.getSongs()[3].name).toBe('lean on');
              expect(songLib.getSongs()[3].genre).toBe('pop');

            });

        });

        describe("function: removeSong(i)", function () {
          beforeEach(function () {
            expect(songLib.getSongs().length).toBe(3);

          });

            it('should call the removeSong function when the button is pressed', function () {
                scope.removeSong(1);
                expect(songLib.getSongs().length).toBe(2);
                expect(songLib.getSongs()[1].name).toBe('money trees');
            });

        });


    });
})();
