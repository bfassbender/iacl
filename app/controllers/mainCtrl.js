'use strict';

app.controller('MainCtrl', ['heroService','campaignService', function (heroService, campaignService) {

    var vm = this;
	vm.title = "Imperial Assault Campaign Logger";
    vm.searchInput = "";
    vm.heroes = heroService.getHeroes();

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

    vm.addHero = function (hero) {
        campaignService.addHero(hero);

    };

    vm.removeHero = function (hero) {
        campaignService.removeHero(hero);

    };

    vm.isCampaignValid = function () {
        return campaignService.isValid;
    };

    vm.getCampaignHeroes = function() {
      return campaignService.getHeroes();
    };


}]);



