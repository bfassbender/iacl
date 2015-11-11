'use strict';

angular.module('iaclApp').controller('MainCtrl', ['heroService', function (heroService) {

    var vm = this;

    vm.heroes = heroService.getHeroes();

    vm.searchInput = "";

    vm.orders = [
        {
            id: 1,
            title: 'Name Ascending',
            key: 'name',
            reverse: false
        },
        {
            id: 2,
            title: 'Name Descending',
            key: 'name',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];

    vm.newHero = {};
    vm.addHero = function () {
        vm.heroes.push(vm.newHero);
        vm.newHero = {};
    };

}]);



