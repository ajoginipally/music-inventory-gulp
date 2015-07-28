'use strict';

/**
 * @ngdoc filter
 * @name musicInventoryApp.filter:switchcase
 * @function
 * @description
 * # switchcase
 * Filter in the musicInventoryApp.
 */
angular.module('musicInventoryApp')
    .filter('songfilter', function () {
            return function (songs, genreFilter) {
                var tmp = [];
                angular.forEach(songs, function (value){
                    if(value.genre === genreFilter) {
                        tmp.push(value);
                    }
                    else if(genreFilter === '') {
                        tmp.push(value);
                    }
                });
                return tmp;
            };
        });