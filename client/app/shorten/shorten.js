angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink()
      .then(function(data) {
        $scope.link = data;
      })
      .catch(function(error) {
        console.log('addLink error: ', error);
      });
  };
});
