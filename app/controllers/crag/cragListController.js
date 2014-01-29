app.controller('cragListController', function($scope, $modal, $log){

  // Prepare the state object
  $scope.state = {};

  $scope.state.crags = [
    {
      name: 'Cochrane Lane',
      thumbnail_image_url: 'http://placekitten.com/100/100',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, omnis, aliquam praesentium cumque nemo magnam non rem et beatae obcaecati dicta minus est necessitatibus...',
      number_of_walls: '7',
      number_of_routes: '115',
      id: '1'
    },
    {
      name: 'Eagle Rock',
      thumbnail_image_url: 'http://placekitten.com/100/99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, officia, sequi, voluptatem dolorum nostrum at explicabo in odit esse officiis...',
      number_of_walls: '9',
      number_of_routes: '255',
      id: '2'
    }
  ];

  $scope.state.openNewCragModal = function() {
    var newCragModal = $modal.open({
      templateUrl: '/templates/newCrag.html',
      controller: 'cragNewController'
    });

    newCragModal.result.then(function(newCrag) {
      console.log(JSON.stringify(newCrag, null, 4));
      $scope.state.crags.push(newCrag);
    }, function() {
      $log.info('Pushed new crag to list of crags');
    });
  }

});
