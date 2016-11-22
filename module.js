(function(){

var app = angular.module("madLibsModule", ["ngRoute"]);

//routes
app.config(function($routeProvider){

    $routeProvider.when("/input", {
      templateUrl: "views/in.html",
      controller: "inputController"
    });
    $routeProvider.when("/output", {
      templateUrl: "views/output.html",
      controller: "outputController"
    });
    $routeProvider.otherwise({
      templateUrl: "views/404.html"
    });
});


})();
