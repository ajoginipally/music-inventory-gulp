/**
 * Created by susansouza on 7/28/2015.
 */
(function() {
  'use strict';

  describe('Service: songLib', function(){

    beforeEach(module('musicInventoryGulp'));
    var  songLib;
    beforeEach(inject(function (_songLib_) {

      songLib = _songLib_;

    }));

    it('should initially define three songs', function(){
      expect(songLib.getSongs().length).toBe(3);
    });

    /*

    Functions

     */

  describe('Functions:', function(){
    beforeEach(inject(function(){
      expect(songLib.getSongs().length).toBe(3);
    }));
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
