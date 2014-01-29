app.controller('cragNewController', function($scope, $modalInstance, $log, UtilService){


  // Prepare the state object
  $scope.state = {
    crag: {}
  }

  $scope.state.crag.country = "Canada";

  $scope.state.create = function() {
    $scope.state.crag.id = UtilService.randomNumber(99, 105);
    $scope.state.crag.number_of_walls = 0;
    $scope.state.crag.number_of_routes = 0;
    $log.info($scope.state.crag);
    $modalInstance.close($scope.state.crag);
  }

  $scope.state.cancel = function() {
    $modalInstance.dismiss();
  }

});
