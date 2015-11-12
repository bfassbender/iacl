'use strict';


describe('Campaign Service', function() {

    var NUMBER_HEROES = 6;

    beforeEach(module('iaclApp'));

    it('should exist', inject(function (heroService) {
        expect(heroService).toBeDefined();
    }));

    it('should implement an isValid() function', inject(function (heroService) {
        expect(heroService.getHeroes()).toBeDefined();
    }));

    it('getHeroes() should return an array of heroes', inject(function (heroService) {
        expect(heroService.getHeroes().length).toEqual(NUMBER_HEROES);
    }));

});