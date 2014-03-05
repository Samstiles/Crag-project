app.service("DummyDataService", function(UtilService){
  var service = {

    // Returns an array of crag objects (desired length passed as an argument)
    randomArrayOfCrags: function(length) {
      var crags = [];
      for ( var i = 0; i < length; i++) {
        var crag = {};
        crag.id = UtilService.randomNumber(0,20000);
        crag.name = "Creature Feature at Phantasia";
        crag.thumbnail_image_url = "http://lorempixel.com/100/100/nature/" + UtilService.randomNumber(0,10).toString();
        crag.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, delectus, doloremque necessitatibus velit deleniti tempore ratione distinctio dolor sequi aliquam.";
        crag.number_of_walls = UtilService.randomNumber(3, 18);
        crag.number_of_routes = UtilService.randomNumber(45,350);
        crag.lon = UtilService.randomLon();
        crag.lat = UtilService.randomLat();
        crag.rating = UtilService.randomNumber(0,5);

        crags.push(crag);
      }
      return crags;
    },
    
    randomRoute: function(){
      var route = {};
      route.name = "The Masochist";
      route.image_url = "http://lorempixel.com/100/100/nature/" + UtilService.randomNumber(0,10).toString();
      route.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, delectus, doloremque necessitatibus velit deleniti tempore ratione distinctio dolor sequi aliquam.";
      route.grade = "5." + UtilService.randomNumber(4,15);
      route.rating = UtilService.randomNumber(0,5);
      
      return route;
    }
  }

  return service;
});
