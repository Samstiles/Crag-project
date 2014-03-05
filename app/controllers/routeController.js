app.controller('routeController', function($scope, $http, route, DummyDataService){
  $scope.state = {};
  $scope.state.route = DummyDataService.randomRoute();
  $scope.state.route.routeID = route;
  
  
  console.log($scope.state.route);
});
