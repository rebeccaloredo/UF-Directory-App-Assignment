angular.module('listings').controller('ListingsController', ['$scope', '$filter', 'Listings',
  function($scope, $filter, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      var newListing = {
        "code": $filter('uppercase')($scope.newCode),
        "name": $scope.newName,
        "coordinates": {
          "latitude": $scope.newLatitude,
          "longitude": $scope.newLongitude
        },
        "address": $scope.newAddress
      };
      Listings.push(newListing);
    };

    $scope.deleteListing = function(listing) {
      //might not need the $splice
      var index = $scope.listings.indexOf(listing);
      $scope.listings.splice(index,1)
    };

    $scope.showDetails = function(listing) {
      var index = $scope.listings.indexOf(listing);
      var listingDetail = Listings[index];
      $scope.showCode = listingDetail.code || '';
      $scope.showName = listingDetail.name || '';

      if (listingDetail.coordinates){
        $scope.showLatitude = listingDetail.coordinates.latitude || '';
        $scope.showLongitude = listingDetail.coordinates.longitude || '';
      }
      else {
        $scope.showLatitude = undefined;
        $scope.showLongitude = undefined;
      }

      $scope.showAddress = listingDetail.address || '';
    };
  }
]);
