(function () {
    'use strict';

    angular
        .module('musicInventoryGulp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, songLib) {
        $scope.genreType = '';

        songLib.getSongsInitial().then(function(response){
          $scope.songs = response.data.songs;
        });

       $scope.songs = songLib.getSongs();

        $scope.addSong = function (song, genre) {
            songLib.addSong(song, genre);
            $scope.name = '';
            $scope.songs = songLib.getSongs();
        };

        $scope.removeSong = function (index) {
            songLib.removeSong(index);
            $scope.songs = songLib.getSongs();

        };
    }
})();
