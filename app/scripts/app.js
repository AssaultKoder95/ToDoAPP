'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    // 'ngAnimate',
    // 'ngAria',
    // 'ngCookies',
    // 'ngMessages',
    // 'ngResource',
    'ngRoute',
    // 'ngSanitize',
    // 'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
