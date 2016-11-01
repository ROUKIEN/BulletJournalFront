'use strict';

angular.module('bulletJournal.core')
.filter('prioritize', function() {
  return function(priority) {
    var priorities = [
      'low',
      'med',
      'high'
    ];
    return priorities[priority-1];
  }
})
