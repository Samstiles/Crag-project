app.controller('cragController', function($scope, cragId){

  // Prepare the state object
  $scope.state = {};

  // Dummy crag object until I get API set up
  var dummyCrag = {
    id: cragId,
    name: 'Cochrane Lane',
    hero_image_url: 'http://ascentnb.com/wp-content/uploads/2013/11/Shawn_Waterwalk_1-980x600.jpg',
    provstate: 'New Brunswick',
    country: 'Canada'
  }

  $scope.state.crag = dummyCrag;
});
