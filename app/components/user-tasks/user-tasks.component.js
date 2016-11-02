'use strict';

angular.module('bulletJournal.userTasks')
.component('userTasks', {
  templateUrl: 'components/user-tasks/user-tasks.template.html',
  controller: ['$routeParams', '$window', 'User', 'Task', function UserTaskCtrl($routeParams, $window, User, Task) {

    this.user = User.get({userId: $routeParams.userId}, function(user) {

    });

    var t = this;

    this.toggleTaskDone = function(task) {
      task.done = !task.done;
      Task.update(task, function(task) {
        console.log('ok')
        $window.alert('Task #'+task.task_id+' state has been toggled !');
      })
    }

    this.deleteTask = function(task) {
      Task.deleteTask({taskId: task.task_id}, function() {
        console.log('deleted given task');
        $window.alert('Deleted task #'+task.task_id+' !');
        var id = 0;
        t.user.tasks.some(function(item, i) {
          if(item.task_id == task.task_id)
            id = i;
        }) 
        t.user.tasks.splice(id, 1)
      });
    }
  }
  ]
});
