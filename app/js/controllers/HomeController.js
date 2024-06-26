"use strict";

foodMeApp.controller(
  "HomeController",
  function ($scope, $routeParams, $location, Restaurant) {
    $scope.restaurant = Restaurant.get({ id: $routeParams.restaurantId });
  }
);
