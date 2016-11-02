'use strict';

angular.module('bulletJournal.userTasks')
.component('userTasks', {
  templateUrl: 'components/user-tasks/user-tasks.template.html',
  controller: ['$routeParams', 'User', 'Task', function UserTaskCtrl($routeParams, User, Task) {

    this.user = User.get({userId: $routeParams.userId}, function(user) {

    });

    var t = this;

    this.toggleTaskDone = function(task) {
      task.done = !task.done;
      Task.update(task, function(task) {
        console.log('ok')
      })
    }

    this.deleteTask = function(task) {
      Task.deleteTask({taskId: task.task_id}, function(task) {
        console.log('deleted given task');
        var id = 0;
        t.user.tasks.some(function(task, i) {
          if(task.task_id == id)
            id = i;
        }) 
        t.user.tasks.splice(id, 1)
      });
    }
  }
  ]
});
