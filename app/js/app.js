var myApp = angular.module('myApp', ['ngRoute', 'artistControllers']);

myApp.config(function config($routeProvider){
    $routeProvider.when('/list', {
        templateUrl: 'templates/list.html',
        controller: 'artistListCtrl',
    })
    .when('/detail/:artistId', {
        templateUrl: 'templates/detail.html',
        controller: 'artistDetailCtrl',
    })
    .when('/addArtist', {
        templateUrl: 'templates/artistForm.html',
        controller: 'addArtistCtrl',
    })
    .otherwise('/list');
});