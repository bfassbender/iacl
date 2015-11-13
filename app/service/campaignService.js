'use strict';

angular.module('iaclApp').factory('campaignService', ['localStorageService', function(localStorageService) {

    var MAX_HEROES = 4;
    var name = "";
    var leader = {};
    var heroes = [];

    return {
        getName: function () {
            return name;
        },

        getLeader: function() {
            return leader;
        },

        getHeroes: function() {
            var heroes_stored = localStorageService.get('heroes');
            if(heroes_stored) {
                heroes = heroes_stored;
            }
            return heroes;
        },

        addHero: function(hero) {
            if(heroes.length < MAX_HEROES) {
                for (var i = 0; i < heroes.length; ++i) {
                    if (heroes[i].name == hero.name) {
                        heroes[i] = hero;
                        localStorageService.set('heroes', heroes);
                        return;
                    }
                }
                heroes.push(hero);
                localStorageService.set('heroes', heroes);
            }
        },

        removeHero: function(hero) {
            for(var i = 0; i < heroes.length; ++i)
            {
                if(heroes[i].name == hero.name)
                {
                    heroes.splice(i, 1);
                    localStorageService.set('heroes', heroes);
                    return;
                }
            }
        },

        isValid: function() {
            return heroes.length > 0 && heroes.length <= MAX_HEROES;  //max 4 Heroes per Campaign
        }
    };

}]);