app.service("UtilService", function(){
  var service = {
    randomElement: function(array){
      return array[Math.floor(Math.random() * array.length)];;
    },

    randomNumber: function(startInt, endInt){
      return Math.floor(Math.random()*(endInt-startInt+1)+startInt);
    }
  }
  return service;
});