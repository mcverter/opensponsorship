(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('demographicComponent', {
      templateUrl: 'app/components/demographic/demographic.html',
      controller: DemographicController,
      controllerAs: 'vm',
      require: {
        parent: '^formComponent'
      },
      bindings: {
        playerData: '<'
      }
    });

  function DemographicController() {
    let vm = this;
    vm.$onInit = () => {
      vm.demographic = vm.parent.getDemographic();
    };
  }
}());


