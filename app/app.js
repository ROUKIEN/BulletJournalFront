'use strict';

// Declare app level module which depends on views, and components
angular.module('bulletJournal', [
  'ngRoute',
  'bulletJournal.todoList',
  'bulletJournal.dashboard',
  'bulletJournal.taskView',
  'bulletJournal.view1',
  'bulletJournal.view2',
  'bulletJournal.version',
  'bulletJournal.core'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider
    .when('/overview', {
      template: '<todo-list></todo-list>'
    })
    .when('/dashboard', {
      template: '<dashboard></dashboard>'
    })
    .otherwise({redirectTo: '/overview'});
}]);
