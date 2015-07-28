(function () {
    'use strict';

    angular
        .module('musicInventoryGulp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, songLib) {
        $scope.genreType = '';

        $scope.songs = songLib.getSongs();

        $scope.addSong = function (song, genre) {
            songLib.addSong(song, genre);
            $scope.name = '';
        };

        $scope.removeSong = function (index) {
            songLib.removeSong(index);

        };
    }
})();
