(function () {
    'use strict';

    angular
        .module('musicInventoryGulp')
        .service('songLib', songLib);

    /** @ngInject */
    function songLib($http) {
        var songs = {};


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