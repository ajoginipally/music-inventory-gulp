(function () {
    'use strict';

    describe('Controller: MainController', function () {

        beforeEach(module('musicInventoryGulp'));
        var mainController, scope, songLib, http, httpBackend;
        beforeEach(inject(function ($controller, $rootScope, _songLib_,$httpBackend, $http) {
            scope = $rootScope.$new();
            songLib = _songLib_;
            http = $http;
            httpBackend = $httpBackend;
            httpBackend.when("GET", "../assets/songs.json").respond(
            {
              "songs": [
                {
                  "name": "back in black",
                  "genre": "rock"
                },
                {
                  "name": "wide awake",
                  "genre": "pop"
                },
                {
                  "name": "money trees",
                  "genre": "rap"
                }
              ]
            });
            mainController = $controller('MainController', {
                $scope: scope

            });
          httpBackend.expectGET('../assets/songs.json');
          songLib.getSongsInitial();
          httpBackend.flush();
          expect(songLib.getSongs().length).toBe(3);
        }));


            it('should attach a list of songs to the scope', function () {
                expect(scope.songs).toBeDefined();
            });


        describe("function: addSong(song, genre)", function () {
          beforeEach(function () {
             expect(songLib.getSongs().length).toBe(3);

            });

            it('should call the addSong function when the button is pressed', function () {
              scope.addSong("lean on", "pop");
              expect(songLib.getSongs().length).toBe(4);
              expect(songLib.getSongs()[3].name).toBe('lean on');
              expect(songLib.getSongs()[3].genre).toBe('pop');

            });

        });

        describe("function: removeSong(index)", function () {
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
