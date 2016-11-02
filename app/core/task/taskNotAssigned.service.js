angular.module('bulletJournal.core.task')
  .factory('TaskNotAssigned', ['$resource',
    function($resource) {
      return $resource('http://localhost:8000/tasks/not-assigned', null, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
