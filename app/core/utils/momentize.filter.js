angular.module('bulletJournal.core')
.filter('momentize', function() {
  return function(date) {
    return moment(date).format('MMMM Do YYYY');
  }
});
