app.service("UtilService", function(){
  var service = {
    randomElement: function(array){
      return array[Math.floor(Math.random() * array.length)];;
    },

    randomNumber: function(startInt, endInt){
      return Math.floor(Math.random()*(endInt-startInt+1)+startInt);
    },
    
    randomLon: function(){
      var from = -180;
      var to = 180;
      
      return (Math.random() * (to - from) + from).toFixed(3) * 1;
    },
    randomLat: function(){
      var from = -90;
      var to = 90;
      
      return (Math.random() * (to - from) + from).toFixed(3) * 1;
    }
  }
  return service;
});
