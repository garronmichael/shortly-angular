angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.data = {};
  $scope.predicate = '-visits';
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(data) {
        data.forEach(function(link, index) {
          link.shortUrl =  link.base_url + '/api/links/' + link.code;
        })
        console.log(data);
        $scope.data.links = data;

      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.getLinks();
});
