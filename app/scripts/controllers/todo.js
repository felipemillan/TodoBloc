'use strict';

angular.module('todoblocApp')
  .controller('TodoCtrl', function ($scope, fbtodo, $timeout, FBURL) {
    // synchronized array of todos
    $scope.todos = fbtodo.syncArray('todos');
	var Done = $scope.todos.Done;
	
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
			      $scope.todos[i].Expired = false;
			    }
			    $scope.todos.$save(i);
	        }
	    }
    };
	

	$scope.todoExpired = function(todo) { 
		  var today = new Date();
		  var fDate = new Date(todo.date);
		  fDate.setDate(fDate.getDate() + 7);
		    if (today > fDate) {
		      return true;
		        } else {
		      return false;
	    }
	};

});