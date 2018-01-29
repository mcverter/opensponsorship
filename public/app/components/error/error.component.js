(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .component('errorComponent', {
      templateUrl: 'app/components/error/error.html',
      controller: ErrorController,
      controllerAs: 'vm',
    });

  function ErrorController() {
  }
}());


