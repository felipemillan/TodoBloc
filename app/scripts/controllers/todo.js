'use strict';

angular.module('todoblocApp')
  .controller('TodoCtrl', function ($scope, fbtodo, $timeout, FBURL) {
    // synchronized array of todos
    $scope.todos = fbtodo.syncArray('todos');
	var Done = $scope.todos.Done;
  // loop through the todos list and update the todo is expired
    for(var i=0;i<$scope.todos.length;i++){
              var is_expired = $scope.todoExpired(todos[i]);
                if (is_expired && todos[i].Expired == false) { 
                  // need to update for Expired date here 
                  $scope.todos[i].Expired = true;
                  $scope.todos.$save(i);
                }
          }
	
	// provide a method for adding a todo
	$scope.addTodo = function(newTodo, todoPriority, status) {
		  			  	
    	// push a todo to the end of the array
    	$scope.todos.$add({
	    	Description: $scope.todoDescription, 
	    	Priority: $scope.todoPriority,
	    	Done: false,
	    	Expired: false,
	    	Date: Date.now() / 1000 | 0 
	    });
    	$scope.todoDescription = '';
    	$scope.todoPriority = '';
    	
    	$scope.descriptionBox = 'Add a new todo';
		$scope.new = document.getElementById('new-todo');
	  
	};
	
	$scope.removeTodo = function(key) {
	    for(var i=0;i<$scope.todos.length;i++){
	        if(key==$scope.todos[i].$id){
	            $scope.todos.$remove(i);
	        }
	    }
    };
	
	$scope.changeState = function(key, done) {
	    for(var i=0;i<$scope.todos.length;i++){
	        if(key==$scope.todos[i].$id){
	            if (done === false ) {
						$scope.todos[i].Done = true;
			    } else {
			      $scope.todos[i].Done = false;
			    }
			    $scope.todos.$save(i);
	        }
	    } 
    };
    
    $scope.changeState2 = function(key, done) {
	    for(var i=0;i<$scope.todos.length;i++){
	        if(key==$scope.todos[i].$id){
	            if (done === false ) {
						$scope.todos[i].Expired = true;
                  
			    } else {
                  // when change this to false,
                  // we also have to update todo.date to new date to avoid it be automatic make expired when app initialize
                  
			      $scope.todos[i].Expired = false;
                  $scope.todos[i].Date =  Date.now() / 1000;
			    }
			    $scope.todos.$save(i);
	        }
	    }
    };
	
	$scope.todoExpired = function(todo) { 
      // get today date
	  var the_7_days_before = new Date();
		the_7_days_before.setDate(today.getDate()-7);
	      if ((the_7_days_before.getTime()/1000) > todo.date ) {
	        return true;
	      }
	      else {
	        return false;
	      }
      	};
});