app.controller('mapController', function($scope, $http, DummyDataService, UtilService){

  // Prepare the state object
  $scope.state = {};
  $scope.state.crags = DummyDataService.randomArrayOfCrags(UtilService.randomNumber(10,25));

  $scope.markers = new Array();
  
  $scope.$on("leafletDirectiveMap.click", function(event, args){
    var leafEvent = args.leafletEvent;
  
    console.log("test");
  
    for (var index = 0; index < $scope.state.crags.length; index++) {
      $scope.markers.push({
        lat: $scope.state.crags[index].lat,
        lng: $scope.state.crags[index].lon,
        message: "Test"
      });
      console.log($scope.markers);
    }
  });
});
