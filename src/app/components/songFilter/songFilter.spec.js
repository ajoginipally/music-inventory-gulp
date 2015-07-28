'use strict';

describe('Filter: songfilter', function () {
    var songs;
    // load the filter's module
    beforeEach(module('musicInventoryGulp'));

    // initialize a new instance of the filter before each test
    var songfilter;
    beforeEach(inject(function ($filter) {
        songfilter = $filter('songfilter');
        songs = [
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
    }));

    /*it('filter rock songs should show a list of rock songs', inject(function (songfilter) {
        var count = 0;

        angular.forEach(songfilter('rock'), function (key, value) {
            if (value.genre === 'rock') {
                count++;
            }
        });

        expect(count).toBe(songfilter('rock').length);
    }));*/

    it('filter rock songs should show a list of rock songs', function () {
        var rockItems = songfilter(songs, 'rock');
        expect(rockItems.length).toBe(1);
    });

    it('filter rap songs should show a list of rap songs', function () {
        var rapItems = songfilter(songs, 'rap');
        expect(rapItems.length).toBe(1);
    });

    it('filter pop songs should show a list of pop songs', function () {
        var popItems = songfilter(songs, 'pop');
        expect(popItems.length).toBe(1);
    });

    it('add another rock song to the list expect list to be two', function () {
        var rockItems = songfilter(songs, 'rock');
        expect(rockItems.length).toBe(1);
        songs.push({
            name: 'england',
            genre: 'rock'
        });
        rockItems = songfilter(songs, 'rock');
        expect(rockItems.length).toBe(2);

    });

});
