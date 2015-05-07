angular.module('starter.controllers', [])

.controller('AboutCtrl', function($scope) {})

.controller('SnapCtrl', function($scope, Chats) {})

.controller('MyPACCtrl', function($scope){})

.controller('PopOverCtrl', function($scope, $ionicPopover){
    $ionicPopover.fromTemplateUrl('templates/tab-popOver.html', { scope: $scope})
        .then(function(popover) {
            $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })

;
