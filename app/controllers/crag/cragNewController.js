app.controller('cragNewController', function($scope, $modalInstance, $log){

  // Prepare the state object
  $scope.state = {};

  $scope.state.create = function() {
    $modalInstance.close($scope.state.crag);
  }

  $scope.state.cancel = function() {
    $modalInstance.dismiss();
  }

});
