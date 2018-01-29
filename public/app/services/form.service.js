(function() {
  'use strict';

  angular
    .module('openSponsorshipForm')
    .service('FormService', ['$http', '$location', function($http, $location) {
      let self = this;
      const originalPlayerData = {
        demographic: {
          name: '',
          dob: '',
          nationality: '',
          location: '',
          gender: '',
          married: '',
          alcohol: '',
          about: ''
        },
        sports: {
          team: '',
          league: '',
          sports: [],
        },
        social: {
          facebook: '',
          twitter: '',
          instagram: '',
          snapchat: '',
          youtube: ''
        }
      };
      self.playerData = JSON.parse(JSON.stringify(originalPlayerData));
      self.allSports = allSports;
      self.allLeagues = allLeagues;
      self.submitPlayer = function() {
        $http.post('api/players', self.playerData)
          .then(function (data) {
            self.playerData = JSON.parse(JSON.stringify(originalPlayerData));
            $location.path('list');
          }, function (error) {
            self.playerData = JSON.parse(JSON.stringify(originalPlayerData));
            $location.path('error');
          })
      }
    }]);


  const allLeagues = ['MLB', 'NBA', 'NFL', 'NHL'];
  const allSports = ['Golf', 'Tennis',
    'Cricket',
    'Basketball',
    'Baseball',
    'American Football',
    'Aquatics',
    'Archery',
    'Automobile Racing',
    'Badminton',
    'Beach Volleyball',
    'Bobsleigh',
    'Body Building',
    'Boxing',
    'Cross Country Running',
    'Cross Country Skiing',
    'Curling',
    'Cycling',
    'Darts',
    'Decathlon',
    'Down Hill Skiing',
    'Equestrianism',
    'eSports',
    'Fencing',
    'Field Hockey',
    'Figure Skating',
    'Gymnastics',
    'Ice Hockey',
    'Martial Arts',
    'Mixed Martial Arts',
    'Modern Pentathlon',
    'Motorcycle Racing',
    'Netball',
    'Polo',
    'Racquetball',
    'Rowing',
    'Rugby',
    'Sailing',
    'Softball',
    'Shooting',
    'Skateboarding',
    'Skeet Shooting',
    'Skeleton',
    'Snow Boarding',
    'Soccer (Football)',
    'Squash',
    'Surfing',
    'Swimming',
    'Track and Field'
  ];
}());
