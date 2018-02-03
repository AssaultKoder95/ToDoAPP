'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('NotesCtrl',['NoteDetails','$scope', function (NoteDetails, $scope) {

    if(NoteDetails.success){
      $scope.id = NoteDetails._id;
      $scope.name = NoteDetails.name;
      $scope.desc = NoteDetails.description;
    } else {
      $scope.error = 'Try again after sometime';
    }

  }]);
