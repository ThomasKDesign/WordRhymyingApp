'use strict';

/**
 * @ngdoc function
 * @name wordRhymyingAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wordRhymyingAppApp
 */
angular.module('wordRymyingApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  });
