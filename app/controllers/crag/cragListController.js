app.controller('cragListController', function($scope, $modal, $log, DummyDataService, UtilService){

  // Prepare the state object
  $scope.state = {};

  $scope.state.crags = DummyDataService.randomArrayOfCrags(UtilService.randomNumber(5,15));

  $scope.state.openNewCragModal = function() {
    var newCragModal = $modal.open({
      templateUrl: '/templates/newCrag.html',
      controller: 'cragNewController',
      windowClass: 'newCragModal'
    });

    newCragModal.result.then(function(newCrag) {
      console.log(JSON.stringify(newCrag, null, 4));
      $scope.state.crags.push(newCrag);
    }, function() {
      $log.info('Pushed new crag to list of crags');
    });
  }

});
