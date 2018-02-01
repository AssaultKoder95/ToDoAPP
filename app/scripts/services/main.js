'use strict';

/**
 * @ngdoc service
 * @name todoApp.main
 * @description
 * # main
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('MainService', function ($http) {
    var ENV = {
      todoApi: 'http://localhost:8900/'
    };

    this.fetchNotes = function() {
      return $http.get(ENV.todoApi);
    };

    this.putNote = function(note){
      return $http.post(ENV.todoApi, note);
    };

    this.deleteNotes = function(){
      return $http.delete(ENV.todoApi);
    };

  });
