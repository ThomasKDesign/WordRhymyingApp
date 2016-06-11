'use strict';

/**
 * @ngdoc service
 * @name wordRhymyingAppApp.current
 * @description
 * # current
 * Factory in the wordRhymyingAppApp.
 */
angular.module('wordRhymyingApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://words.bighugelabs.com/api/2/650f6747f676f2662f0c5398fe2bcecb/word/json', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
      }
    });
  });
