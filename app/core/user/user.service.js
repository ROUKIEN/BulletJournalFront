angular.module('bulletJournal.core.user')
  .factory('User', ['$resource', 'api_url',
    function($resource, api_url) {
      return $resource(api_url+'/users/:userId', {}, {
        query: {
          method: 'GET',
          params: {userId: '0'},
          isArray: true
        }
      });
    }
  ]);
