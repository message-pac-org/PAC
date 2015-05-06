// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
  .state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
      }
    }
  })

  .state('tab.about-ourHistory', {
    url: '/about/ourHistory',
    views: {
      'tab-about': {
        templateUrl: 'templates/about/ourHistory.html',
      }
    }
  })

  .state('tab.about-whatWeDo', {
    url: '/about/whatWeDo',
    views: {
      'tab-about': {
        templateUrl: 'templates/about/whatWeDo.html',
      }
    }
  })

  .state('tab.about-petSafety', {
    url: '/about/petSafety',
    views: {
      'tab-about': {
        templateUrl: 'templates/about/petSafety.html',
      }
    }
  })


  .state('tab.about-pacNews', {
    url: '/about/pacNews',
    views: {
      'tab-about': {
        templateUrl: 'templates/about/pacNews.html',
      }
    }
  })

  .state('tab.about-contactUs', {
    url: '/about/contactUs',
    views: {
      'tab-about': {
        templateUrl: 'templates/about/contactUs.html',
      }
    }
  })


  .state('tab.snap', {
      url: '/snap',
      views: {
        'tab-snap': {
          templateUrl: 'templates/tab-snap.html',
        }
      }
    })


  .state('tab.myPAC', {
    url: '/myPAC',
    views: {
      'tab-myPAC': {
        templateUrl: 'templates/tab-myPAC.html',
      }
    }
  })

  .state('tab.myPAC-myInformation', {
    url: '/myPAC/myInformation',
    views: {
      'tab-myPAC': {
        templateUrl: 'templates/myPAC/myInformation.html',
      }
    }
  })

  .state('tab.myPAC-myNotifications', {
    url: '/myPAC/myNotifications',
    views: {
      'tab-myPAC': {
        templateUrl: 'templates/myPAC/myNotifications.html',
      }
    }
  })

  .state('tab.myPAC-myAppointments', {
    url: '/myPAC/myAppointments',
    views: {
      'tab-myPAC': {
        templateUrl: 'templates/myPAC/myAppointments.html',
      }
    }
  })

  .state('tab.myPAC-submitMyDocuments', {
    url: '/myPAC/submitMyDocuments',
    views: {
      'tab-myPAC': {
        templateUrl: 'templates/myPAC/submitMyDocuments.html',
      }
    }
  })

  .state('tab.myPAC-contactUs', {
    url: '/myPAC/contactUs',
    views: {
      'tab-myPAC': {
        templateUrl: 'templates/myPAC/contactUs.html',
      }
    }
  })

  ;



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/myPAC');

});
