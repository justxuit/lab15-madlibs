(function() {

var app = angular.module("madLibsModule");

app.controller("outputController", function($scope, wordStorage){
  var madLibs = wordStorage.getMadLibs();
  $scope.madLibs = madLibs;
});

})();
