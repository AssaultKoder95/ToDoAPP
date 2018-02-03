'use strict';

/**
 * @ngdoc service
 * @name todoApp.NoteService
 * @description
 * # NoteService
 * Service in the todoApp.
 */
angular.module('todoApp').service('NoteService', [
  '$http',
  'ENV',
  function($http,) {

    var factory = {};

    factory.fetchNote = function(id) {
      console.log(ENV.notesApi + id);
      return $http.get(ENV.notesApi + id);
    };

    return factory;
  }
]);
