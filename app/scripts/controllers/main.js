'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp').controller('MainCtrl', [
  'MainService',
  function(MainService) {
    var v = this;

    function fetchNotes() {
      MainService.fetchNotes().then(function(result) {
        if (result.data.success) {
          v.notes = result.data.data;
        } else {
          console.log(result.data.message);
        }
      }, function(err) {
        console.log(err);
      });
    }

    v.addNotes = function() {
      let requestObject = {
        name: v.name,
        body: v.body
      };
      MainService.putNote(requestObject).then(function(result) {
        if (result.data.success) {
          console.log("successfully added note");
          fetchNotes();
        } else {
          console.log(result.data.message);
        }
      }, function(err) {
        console.log(err);
      });
    };

    v.deleteNotes = function() {
      MainService.deleteNotes().then(function(result) {
        if (result.data.success) {
          console.log("successfully deleted all notes");
          fetchNotes();
        } else {
          console.log(result.data.message);
        }
      }, function(err) {
        console.log(err);
      });
    };

    fetchNotes();
  }
]);
