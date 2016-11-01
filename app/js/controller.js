var artistControllers = angular.module('artistControllers', []);

//sharing artists data across all controllers and views
artistControllers.factory('Data', function () {
  return { artists: [] };
});

artistControllers.controller('artistListCtrl', function ($http, $scope, Data) {
  //use shared artist data
  //fetch data for saved file if the data doesn't exist
  if (Data.artists.length > 0) {
    $scope.artists = Data.artists;
  } else {
    $http.get('js/data.json')
    .then(function success(response) {
      Data.artists = response.data;
      $scope.artists = response.data;
    }, function fail(response){
      console.log(response.statustext);
    });
  }
});

artistControllers.controller('artistDetailCtrl', function ($http, $scope, Data, $routeParams) {
  $scope.artistIndex = $routeParams.artistId;
  //use shared artist data
  //fetch data for saved file if the data doesn't exist
  if (Data.artists.length > 0) {
    $scope.artists = Data.artists;
  } else {
    $http.get('js/data.json')
    .then(function success(response) {
      Data.artists = response.data;
      $scope.artists = response.data;
    }, function fail(response){
      console.log(response.statustext);
    });
  }
});

artistControllers.controller('addArtistCtrl', function ($http, $scope, Data, $window) {
  //use shared artist data
  //fetch data for saved file if the data doesn't exist
  if (Data.artists.length > 0) {
    $scope.artists = Data.artists;
  } else {
    $http.get('js/data.json')
    .then(function success(response) {
      Data.artists = response.data;
      $scope.artists = response.data;
    }, function fail(response){
      console.log(response.statustext);
    });
  }

  //update artists list and redirect to list page
  $scope.update = function (newArtist) {
    var formattedArtist = {};
    formattedArtist.name = formatString(newArtist.name);
    formattedArtist.shortname = "sample_added_artist";
    formattedArtist.reknown = formatString(newArtist.reknown);
    formattedArtist.bio = newArtist.bio;
    $scope.artists.push(formattedArtist);
    $window.location.href = "#/list";
  };

  //format string so that the first letter of each word is upper case
  var formatString = function (name) {
    if(!name){
      return name;
    }
    var formatted = "";
    name.split(' ').forEach(function (s) {
      formatted += s.charAt(0).toUpperCase();
      formatted += s.slice(1);
      formatted += ' ';
    });
    return formatted.trim();
  };
});