angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.newLink = {};

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

  $scope.addLinks = function(){
    Links.addLinks($scope.newLink)
    .then(function(data){
      $scope.newLink = data;
    })
    .catch(function(error){
      console.error(error);
    });
  };

});
