(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('logo', {
      templateUrl: 'app/components/logo/logo.html',
      controller: LogoController,
      controllerAs: 'vm',
    });

  function LogoController() {
  }
}());


