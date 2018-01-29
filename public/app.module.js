(function() {
  'use strict';

  angular.module('openSponsorshipForm', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider',

      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('form', {
            url: '/form',
            component: 'formComponent'
          })
          .state('form.demographic', {
            url: '/demographic',
            component: 'demographicComponent'
          })
          .state('form.social', {
            url: '/social',
            component: 'socialComponent'
          })
          .state('form.sports', {
            url: '/sports',
            component: 'sportsComponent'
          })
          .state('form.summary', {
            url: '/summary',
            component: 'summaryComponent'
          })
          .state('list', {
            url: '/list',
            component: 'listComponent',
          })
          .state('error', {
            url: '/error',
            component: 'errorComponent',
          });
        $urlRouterProvider.otherwise('/form/demographic');
      }]);
}());
