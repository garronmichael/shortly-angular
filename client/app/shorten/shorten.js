angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.getLinks();
});
