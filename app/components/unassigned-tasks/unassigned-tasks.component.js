'use strict';

angular.module('bulletJournal.unassignedTasks')
  .component('unassignedTasks', {
    templateUrl: 'components/unassigned-tasks/unassigned-tasks.template.html',
    controller: ['TaskNotAssigned', function UnassignedTasksCtrl(TaskNotAssigned) {
      this.tasks = TaskNotAssigned.query();
    }
  ]
});
