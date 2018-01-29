(function() {
    'use strict';

    angular
        .module('openSponsorshipForm')
        .component('sportsComponent', {
            templateUrl: 'app/components/sports/sports.html',
            controller: SportsController,
            controllerAs: 'vm',
            require: {
                parent: '^formComponent'
            },
            bindings: {
                playerData: '<',
            }
        });

    function SportsController() {
        let vm = this;
        vm.$onInit = () => {
            vm.sports = vm.parent.getSports();
            vm.allSports = vm.parent.getAllSports();
            vm.allLeagues = vm.parent.getAllLeagues();
        };
    }
}());

