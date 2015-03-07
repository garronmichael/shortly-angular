angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links) {
  // Your code here
  $scope.data = {};

  // $scope.getLinks = function(){
  //   Links.getLinks()
  //     .then(function(data) {
  //       console.log(data);
  //       $scope.data.links = data;
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  // };

  // $scope.getLinks();

  $scope.addLink = function(){
    Links.addLink($scope.data)
    .then(function(data){
      console.log($location);
      $location.path('/shorten');
      // $scope.data.links.push(data);
    })
    .catch(function(error){
      console.error("Link error: ", error);
    });
  };

});
