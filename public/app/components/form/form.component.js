(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('formComponent', {
      templateUrl: 'app/components/form/form.html',
      controller: ['FormService', FormController],
      controllerAs: 'vm'
    });

  function FormController(FormService) {
    let vm = this;
    vm.playerData = FormService.playerData;
    vm.getAllLeagues = () => FormService.allLeagues;
    vm.getAllSports = () => FormService.allSports;
    vm.getDemographic = () => vm.playerData.demographic;
    vm.getSports = () => vm.playerData.sports;
    vm.getSocial = () => vm.playerData.social;
    vm.getPersonal = () => vm.playerData.personal;
    vm.getSummary = () => vm.playerData;
  }
}());

