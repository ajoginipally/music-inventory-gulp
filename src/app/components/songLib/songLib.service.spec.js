/**
 * Created by susansouza on 7/28/2015.
 */
(function() {
  'use strict';

  describe('Service: songLib', function(){

    beforeEach(module('musicInventoryGulp'));
    var  songLib, httpBackend, http;
    beforeEach(inject(function (_songLib_, $httpBackend, $http) {

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
    }));

    it('should define an empty object called songs', function(){
      var obj = {};
      expect(songLib.getSongs()).toEqual(obj);
    });



    /*

    Functions

     */



  describe('Functions:', function(){
    beforeEach(inject(function(){
      httpBackend.expectGET('../assets/songs.json');
      songLib.getSongsInitial();
      httpBackend.flush();
      expect(songLib.getSongs().length).toBe(3);
    }));

    describe('Function: getSongsInitial', function(){
      it('should make a GET request for three songs', function(){
        httpBackend.expectGET('../assets/songs.json');
        songLib.getSongsInitial();
        httpBackend.flush();
        expect(songLib.getSongs().length).toBe(3);

      });
    });

      describe('Function: getSongs()', function(){
        it('should return the current list of songs', function(){
          expect(songLib.getSongs()[0].name).toBe('back in black');
          expect(songLib.getSongs()[1].name).toBe('wide awake');
          expect(songLib.getSongs()[2].name).toBe('money trees');

        });

      });

      describe('Function: addSong(name, genre', function(){
        it('should add a new song to the list of songs', function(){
            songLib.addSong('wild thing', 'rock');
            expect(songLib.getSongs().length).toBe(4);
            expect(songLib.getSongs()[3].name).toBe('wild thing');
            expect(songLib.getSongs()[3].genre).toBe('rock');
        });

      });

      describe('Function: removeSong(index)', function(){

          it('should remove the indicated song (by index) from the list of songs', function(){
            songLib.removeSong(1);
            expect(songLib.getSongs().length).toBe(2);
            expect(songLib.getSongs()[1].name).toBe('money trees');

          });
      });
    });
  });
})();
