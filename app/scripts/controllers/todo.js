'use strict';

angular.module('todoblocApp')
  .controller('TodoCtrl', function ($scope, fbtodo, $timeout) {
    // synchronized array of todos
    $scope.todos = fbtodo.syncArray('todos');

	// provide a method for adding a todo
	$scope.addTodo = function(newTodo, todoPriority, status) {
		  	
		  	var timestamp = new Date().valueOf();
		  	
	    	// push a todo to the end of the array
	    	$scope.todos.$add({
		    	Description: $scope.todoDescription, 
		    	Priority: $scope.todoPriority,
		    	Done: false,
		    	Expired: false 
		    });
	    	$scope.todoDescription = '';
	    	$scope.todoPriority = '';
	    	$scope.new.focus();
	    	
	    	$scope.descriptionBox = 'Add a new todo';
			$scope.new = document.getElementById('new-todo');
	  
	};
	
	$scope.removeTodo = function(todo) {
        $scope.todos.$remove(todo);
      };
    
    
    // update todo for changes we made
	$scope.doneEditing = function(todo){
		$scope.editedTodo = null;
		var title = todo.title.trim();
		if (title) {
			$scope.todos.$save(todo);
		} else {
			$scope.removeTodo(todo);
		}
	};
  
  
    
    
    
	
	
	
	
    
    
    
    
    
      
/*
    $scope.todoChangeStatus = function(todo) {
        if(todo.done === 'Complete'){
           return true;
        } else if(!todo.done === 'Current'){
          return true;
        }
      };
*/
	
		
  
  
	  $scope.markAsComplete = function(index) {
	    var todo = $scope.todos[index];
	    $scope.todos.splice(index, 1);
	    $scope.completedTodos.$add(todos);
	  };
	  
	  $scope.markAsIncomplete = function(index) {
	    var todo = $scope.completedTodos[index];
	    $scope.completedTodos.splice(index, 1);
	    $scope.todos.$add(todos);
	  };
	  
	  $scope.getTotalTodos = function() {
	    return $scope.todos.length;
	  };
	  
	  $scope.calculatePercent = function(count) {
	    var total = $scope.getTotalTodos();
	    return Math.round(100 / total * count);
	  };
  

  
  
  });
  
  
  
  
  
/*
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
*/