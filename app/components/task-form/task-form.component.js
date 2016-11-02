'use strict';

angular.module('bulletJournal.taskForm')
  .component('taskForm', {
    templateUrl: 'components/task-form/task-form.template.html',
    controller: ['$routeParams', 'User', 'Task', function TaskFormCtrl($routeParams, User, Task) {
      
      this.task = {};
      var t = this;
      if($routeParams.taskId > 0) {
        this.task.task_id = $routeParams.taskId;
        Task.get({taskId: $routeParams.taskId}, function(task) {
          t.task = task;
        })
      }

      this.save = function(task) {
        if(!task.task_id) {
          // creating a task
          console.log('creating task')
          console.log(task)
          Task.save(task, function(task) {
            //$location.path('/');
          })
        } else {
          //updating a task
          console.log('updating task')
          Task.update(task, function(task) {
            console.log('updated')
            //$location.path('/');
          })
        }
        return false
      }
    }
  ]
});
