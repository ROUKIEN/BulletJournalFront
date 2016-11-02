angular.module('bulletJournal.core.task')
  .factory('Task', ['$resource', 'api_url',
    function($resource, api_url) {
      return $resource(api_url+'/tasks/:taskId', {taskId: '@task_id'}, {
        query: {
          method: 'GET',
          params: {taskId: ''},
          isArray: true
        },
        update: {
          method: 'PUT'
        },
        deleteTask: {
          method: 'DELETE',
          params: {taskId: ''}
        }
      });
    }
  ]);
