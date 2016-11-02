'use strict';

angular.module('bulletJournal.taskForm')
  .component('taskForm', {
    templateUrl: 'components/task-form/task-form.template.html',
    controller: ['$routeParams', '$window', 'User', 'Task', function TaskFormCtrl($routeParams, $window, User, Task) {
      
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
          Task.save(task, function(task) {
            $window.alert('Task created !');
            $window.location.href ='/';
          })
        } else {
          //updating a task
          console.log('updating task')
          Task.update(task, function(task) {
            console.log('updated')
            $window.alert('Task Updated !');
            $window.location.href = '/';
          })
        }
        return false
      }
    }
  ]
});
