'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular.module('todoApp', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'mainctrl'
  }).when('/:noteId', {
    templateUrl: 'views/notes.html',
    controller: 'NotesCtrl',
    controllerAs: 'notes',
    resolve: {
      NoteDetails: [
        'NoteService',
        '$route',
        function(NoteService, $route) {
          if (parseInt($route.current.params.noteId)) {
            NoteService.fetchNote($route.current.params.noteId).then(function(result) {
              if (result.data.success) {
                return result.data;
              } else {
                console.log('No note from this :' + $route.current.params.noteId + ' id');
              }
            }, function(err) {
              console.log(err);
            });
          } 
        }
      ]
    }
  }).otherwise({redirectTo: '/'});
});
