(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('listComponent', {
      templateUrl: 'app/components/list/list.html',
      controller: ['PlayersService', ListController],
      controllerAs: 'vm'
    });

  function ListController(PlayersService) {
    var vm = this;

    PlayersService.getPlayers()
      .then(players=> {
        vm.players=players
      })
    }
}());


