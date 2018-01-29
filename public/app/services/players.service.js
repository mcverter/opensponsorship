(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .service('PlayersService', ['$http', function($http) {
      this.getPlayers = function() {
        return $http.get('api/players')
          .then(function (data) {
            return data.data;
          }, function (error) {
            $location.path('error');
          })
      }
    }]);
}());
