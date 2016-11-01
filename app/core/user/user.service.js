angular.module('bulletJournal.core.user')
  .factory('User', ['$resource',
    function($resource) {
      return $resource('http://localhost:8000/users/:userId/summary', {}, {
        query: {
          method: 'GET',
          params: {userId: '0'},
          isArray: true
        }
      });
    }
  ]);
