(function () {
    'use strict';

    angular
        .module('musicInventoryGulp')
        .service('songLib', songLib);

    /** @ngInject */
    function songLib($http) {
        var songs = {};

        return {

          getSongsInitial: function(){

            return $http.get('../assets/songs.json').then(function (response) {
              songs = response.data.songs;
              return response;
            }, function(error){
              console.log('Uh-oh. Something went wrong when trying to GET songs.json. Code: '+ error.status);
            });

          },

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
