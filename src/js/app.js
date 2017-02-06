(function(){

  var app = angular.module('BaseAlpha', ['ngRoute', 'ngAnimate', 'firebase']);

  app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider.when('/home', {
      templateUrl: 'build/pages/home.html',
      controller: 'HomeCtrl'
    }).when('/about', {
      templateUrl: 'build/pages/about.html',
      controller: 'AboutCtrl'
    }).when('/', {
      templateUrl: 'build/pages/home.html'
    }).otherwise({ redirectTo: '/' });

  }]);

  app.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.pageClass = 'page-home';
    console.log($scope.pageClass);
  }]);

  app.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.pageClass = 'page-about';
    console.log($scope.pageClass);
  }]);



})();
