'use strict';

// Declare app level module which depends on views, and components
angular.module('bulletJournal', [
  'ngRoute',
  'bulletJournal.todoList',
  'bulletJournal.dashboard',
  'bulletJournal.userTasks',
  'bulletJournal.taskView',
  'bulletJournal.taskForm',
  'bulletJournal.unassignedTasks',
  'bulletJournal.assign',
  'bulletJournal.view1',
  'bulletJournal.view2',
  'bulletJournal.version',
  'bulletJournal.core'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider
    .when('/dashboard', {
      template: '<dashboard></dashboard>'
    })
    .when('/task/:taskId/assign', {
      template: '<assign></assign>'
    })
    .when('/task/create', {
      template: '<task-form></task-form>'
    })
    .when('/task/update/:taskId', {
      template: '<task-form></task-form>'
    })
    .when('/user/:userId', {
      template: '<user-tasks></user-tasks>'
    })
    .otherwise({redirectTo: '/dashboard'});
}]);
