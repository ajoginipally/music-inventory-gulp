(function () {
    'use strict';

    angular
        .module('musicInventoryGulp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, songLib) {
        $scope.genreType = '';

        $scope.songs = songLib.getSongs();

        $scope.addSong = function () {
            songLib.addSong($scope.song, $scope.genre);
        };

        $scope.removeSong = function (i) {
            songLib.removeSong(i);

        };
    }
})();