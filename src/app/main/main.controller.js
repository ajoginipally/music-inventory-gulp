(function () {
    'use strict';

    angular
        .module('musicInventoryGulp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, songLib, $http) {
        $scope.genreType = '';

        $http.get('../assets/songs.json').success(function (data) {
            $scope.songs = data.songs;
        }).error(function (status) {
            console.log("there is an error: " + status);
        });

        $scope.songs = $scope.songs.songs;

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