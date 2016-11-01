angular.module('bulletJournal.core.task')
  .factory('Task', ['$resource',
    function($resource) {
      return $resource('http://localhost:8000/tasks/:taskId', {}, {
        query: {
          method: 'GET',
          params: {taskId: ''},
          isArray: true
        }
      });
    }
  ]);
