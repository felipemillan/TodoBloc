angular.module('firebase.config', [])
  .constant('FBURL', 'https://bloc-todo.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])

  .constant('loginRedirectPath', '/login');
