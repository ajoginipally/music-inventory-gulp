(function() {
  'use strict';

  angular
      .module('musicInventoryGulp')
      .service('songLib', songLib);

  /** @ngInject */
  function songLib() {
    var songs = [
      {
        name: 'back in black',
        genre: 'rock'
      },
      {
        name: 'wide awake',
        genre: 'pop'
      },
      {
        name: 'money trees',
        genre: 'rap'
      }
    ];
    return {

      getSongs: function () {

        return songs;
      },

      addSong: function (name, genre) {
        var newSong = {
          "name": name,
          "genre": genre
        };
        songs.push(newSong);
          

      },
      removeSong: function (index) {
        songs.splice(index, 1);
      }


    };
  }
})();
