(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('summaryComponent', {
      templateUrl: 'app/components/summary/summary.html',
      controller: ['FormService', SummaryController],
      controllerAs: 'vm',
      require: {
        parent: '^formComponent'
      },
      bindings: {
        playerData: '<'
      }
    });

  function SummaryController(FormService) {
    let vm = this;
    vm.$onInit = () => {
      vm.summary = vm.parent.getSummary();
    };
    vm.submitPlayer = () => {
        FormService.submitPlayer();
    }
  }
}());


