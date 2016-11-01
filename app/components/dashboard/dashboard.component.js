'use strict';

angular.module('bulletJournal.dashboard')
  .component('dashboard', {
    templateUrl: 'components/dashboard/dashboard.template.html',
    controller: ['User', function TodoListCtrl(User) {
      this.lists = User.query();
    }
  ]
});
