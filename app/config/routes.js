app.config(function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/search/', {
    templateUrl: '/templates/search.html',
    controller: 'searchController'
  })

  // View a Map of all Crags
  .when('/map/', {
    templateUrl: '/templates/map.html',
    controller: 'mapController'
  })

  // List of all crags in DB
  .when('/crags/', {
    templateUrl: '/templates/crags.html',
    controller: 'cragListController'
  })

  // View specific crag
  .when('/crag/:cragId', {
    templateUrl: '/templates/crag.html',
    controller: 'cragController',
    resolve: {
      "cragId": function ($route) {
        return $route.current.params.cragId;
      }
    }
  })

  // Homepage
  .when('/', {
    templateUrl: '/templates/home.html',
    controller: 'homeController'
  })

  // List of all routes in DB
  .when('/routes/', {
    templateUrl: '/templates/routes.html',
    controller: 'routeListController'
  })

  // View specific wall
  .when('/wall/:wallId', {
    templateUrl: '/templates/wall.html',
    controller: 'wallController',
    resolve: {
      "wall": function ($route) {
        return $route.current.params.wallId;
      }
    }
  })

  // View specific route
  .when('/route/:routeId', {
    templateUrl: '/templates/route.html',
    controller: 'routeController',
    resolve: {
      "route": function ($route) {
        return $route.current.params.routeId;
      }
    }
  })

  // Signup page
  .when('/signup/', {
    templateUrl: '/templates/signup.html',
    controller: 'signupController'
  })

  // Profile page
  .when('/profile/', {
    templateUrl: '/templates/profile.html',
    controller: 'profileController'
  })

  // Otherwise, 404!
  .otherwise({
    templateUrl: '/templates/404.html'
  });

  // HTML5 mode for routes -- will require (later on)
  // a server-side rewrite to the entry point on ALL
  // urls in order to not make angular freak out
  // $locationProvider.html5Mode(true);
});
