(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('socialComponent', {
      templateUrl: 'app/components/social/social.html',
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
      vm.social = vm.parent.getSocial();
    };
  }
}());


