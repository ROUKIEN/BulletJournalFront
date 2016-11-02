'use strict';

angular.module('bulletJournal.todoList')
  .component('todoList', {
    bindings: {
      userdata: '='
    },
    templateUrl: 'components/todo-list/todo-list.template.html',
    controller: ['Task', function TodoListCtrl(Task) {
    }
  ]
});
