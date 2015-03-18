'use strict';

angular.module('todoblocApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = [
    'Fix broken links',
    'Spelling and grammar',
    'Check website in all browsers',
    'World ready',
    'Automated testing'
  ];
  
  $scope.completedTodos = [
    'Google Page Speed score of 90+',
    'Yahoo YSlow score of 85+',
    'Optimize HTTP headers',
    'Optimize images',
    'HTML validation',
    'CSS validation',
    'Run CSS Lint',
    'Run JSLint/JSHint'
  ];
   
  $scope.add = function(todo) {
    if ( todo === '' || typeof todo === 'undefined' ) {
      return false;
    }
    
    $scope.todos.push(todo);
    $scope.newTodo = '';
  };
  
  $scope.markAsComplete = function(index) {
    var todo = $scope.todos[index];
    $scope.todos.splice(index, 1);
    $scope.completedTodos.push(todo);
  };
  
  $scope.markAsIncomplete = function(index) {
    var todo = $scope.completedTodos[index];
    $scope.completedTodos.splice(index, 1);
    $scope.todos.push(todo);
  };
  
  $scope.getTotalTodos = function() {
    return $scope.todos.length + $scope.completedTodos.length;
  };
  
  $scope.calculatePercent = function(count) {
    var total = $scope.getTotalTodos();
    return Math.round(100 / total * count);
  };
  });
