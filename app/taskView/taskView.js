'use strict';

angular.module('bulletJournal.taskView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/taskView', {
    templateUrl: 'taskView/taskView.html',
    controller: 'TaskViewCtrl'
  });
}])

.controller('TaskViewCtrl', [function($scope) {
}]);
