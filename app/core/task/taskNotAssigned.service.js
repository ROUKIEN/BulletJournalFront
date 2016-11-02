angular.module('bulletJournal.core.task')
  .factory('TaskNotAssigned', ['$resource', 'api_url',
    function($resource, api_url) {
      return $resource(api_url+'/tasks/not-assigned', null, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
