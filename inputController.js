(function() {

var app = angular.module("madLibsModule");

app.controller("inputController", function($scope, wordStorage){
  $scope.getJiggy = function(){
      var madLibs = $scope.data;

      wordStorage.setMadLibs(madLibs);
      location.hash = "/output";
  };
});



})();
