'use strict';


describe('Campaign Service', function() {

    beforeEach(module('iaclApp'));

    it('should exist', inject(function (campaignService) {
        expect(campaignService).toBeDefined();
    }));

    it('should implement an isValid() function', inject(function (campaignService) {
        expect(campaignService.isValid).toBeDefined();
        expect(campaignService.isValid()).toEqual(false);
    }));

    it('isValid() should be true if 1 hero has been added', inject(function (campaignService) {
        campaignService.addHero({name: 'one'});
        expect(campaignService.isValid()).toEqual(true);
    }));

    it('isValid() should be true if 4 heroes have been added', inject(function (campaignService) {
        campaignService.addHero({name: 'one'});
        campaignService.addHero({name: 'two'});
        campaignService.addHero({name: 'three'});
        campaignService.addHero({name: 'four'});
        expect(campaignService.isValid()).toEqual(true);
    }));

    it('isValid() should be false if more than 4  heroes have been added', inject(function (campaignService) {
        campaignService.addHero({name: 'one'});
        campaignService.addHero({name: 'two'});
        campaignService.addHero({name: 'three'});
        campaignService.addHero({name: 'four'});
        campaignService.addHero({name: 'five'});
        expect(campaignService.isValid()).toEqual(false);
    }));

    it('addHero() called multiple times with heroes having the same name should only result in the last hero being added', inject(function (campaignService) {
        var firstHero = {name: 'one'};
        var secondHero = {name: 'one'};
        campaignService.addHero(firstHero);
        campaignService.addHero(secondHero);
        expect(campaignService.getHeroes()[0]).toBe(secondHero);
    }));

    it('removeHero(hero) should remove an already added hero with the same name', inject(function (campaignService) {
        campaignService.addHero({name: 'one'});
        expect(campaignService.getHeroes().length).toEqual(1);
        campaignService.removeHero({name: 'one'});
        expect(campaignService.getHeroes().length).toEqual(0);
    }));

});