'use strict';

angular.module('iaclApp').factory("heroService", function () {

    var heroes = [
        {
            name: 'Diala Passil',
            wave: 'Starter Box',
            images: {
                card: 'img/ia/heroes/diala_passil.jpg',
                portrait: 'img/ia/heroes/diala_passil-portrait.jpg'
            }
        },
        {
            name: 'Fenn Signis',
            wave: 'Starter Box',
            images: {
                card: 'img/ia/heroes/fenn_signis.jpg',
                portrait: 'img/ia/heroes/fenn_signis-portrait.jpg'
            }
        },
        {
            name: 'Gaarkhan',
            wave: 'Starter Box',
            images: {
                card: 'img/ia/heroes/gaarkhan.jpg',
                portrait: 'img/ia/heroes/gaarkhan-portrait.jpg'
            }
        },
        {
            name: 'Gideon Argus',
            wave: 'Starter Box',
            images: {
                card: 'img/ia/heroes/gideon_argus.jpg',
                portrait: 'img/ia/heroes/gideon_argus-portrait.jpg'
            }
        },
        {
            name: 'Jyn Odan',
            wave: 'Starter Box',
            images: {
                card: 'img/ia/heroes/jyn_odan.jpg',
                portrait: 'img/ia/heroes/jyn_odan-portrait.jpg'
            }
        },
        {
            name: "Mak Eshka'rey",
            wave: 'Starter Box',
            images: {
                card: 'img/ia/heroes/mak_eshkarey.jpg',
                portrait: 'img/ia/heroes/mak_eshkarey-portrait.jpg'
            }
        }
    ];

    return {
        getHeroes: function() {
            return heroes;
        }
    };
});