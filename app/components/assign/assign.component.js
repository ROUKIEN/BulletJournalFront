'use strict';

angular.module('bulletJournal.assign')
  .component('assign', {
    templateUrl: 'components/assign/assign.template.html',
    controller: ['$routeParams', '$window','User', 'Task', function AssignCtrl($routeParams, $window, User, Task) {
      this.users = User.query();
      this.task = Task.get({taskId: $routeParams.taskId});
      
      this.assignUser = function(task) {
        Task.update(task, function(task) {
          console.log(task)
            $window.alert('User assigned to task #'+task.task_id+' !');
            $window.location.href = '/';
        });
      }
    }
  ]
});
