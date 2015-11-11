'use strict';

angular.module('iaclApp').factory('campaignService', function() {

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
            return heroes;
        },

        addHero: function(hero) {
            for(var i = 0; i < heroes.length; ++i)
            {
                if(heroes[i].name == hero.name)
                {
                    heroes[i] = hero;
                    return;
                }
            }
            heroes.push(hero);
        },

        removeHero: function(hero) {
            for(var i = 0; i < heroes.length; ++i)
            {
                if(heroes[i].name == hero.name)
                {
                    heroes.splice(i, 1);
                    return;
                }
            }
        },

        isValid: function() {
            return heroes.length > 0 && heroes.length <= MAX_HEROES;  //max 4 Heroes per Campaign
        }
    };

});