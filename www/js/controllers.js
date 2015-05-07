angular.module('starter.controllers', [])

.controller('AboutCtrl', function($scope) {})

.controller('SnapCtrl', function($scope, Chats) {})

.controller('MyPACCtrl', function($scope){})

.controller('PopOverCtrl', function($scope, $ionicPopover) {
      //var template = '<ion-popover-view><ion-content>Version 0.0.1</ion-content></ion-popover-view>';
    //   var template = '<ion-popover-view>Version 0.0.1</ion-popover-view>';
    //   $scope.popover = $ionicPopover.fromTemplate(template, {
    //     scope: $scope
    //   });

      $ionicPopover.fromTemplateUrl('tab-popOver.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
      });

      $scope.openPopover = function($event) {
        $scope.popover.show($event);
      };
      $scope.closePopover = function() {
        $scope.popover.hide();
      };

      $scope.$on('$destroy', function() {
        $scope.popover.remove();
      });

      $scope.$on('popover.hidden', function() {
        // Execute action
      });

      $scope.$on('popover.removed', function() {
        // Execute action
      });

      $scope.demo = 'ios';
      $scope.setPlatform = function(p) {
        document.body.classList.remove('platform-ios');
        document.body.classList.remove('platform-android');
        document.body.classList.add('platform-' + p);
        $scope.demo = p;
      }      
    });
