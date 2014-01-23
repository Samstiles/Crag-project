app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: '/templates/home.html',
    controller: 'homeController'
  })
  .when('/crags/', {
    templateUrl: '/templates/crags.html',
    controller: 'cragController'
  })
  .otherwise({
    templateUrl: '/templates/404.html'
  });

  // HTML5 mode for routes -- will require (later on)
  // a server-side rewrite to the entry point on ALL
  // urls in order to not make angular freak out
  // $locationProvider.html5Mode(true);
});
