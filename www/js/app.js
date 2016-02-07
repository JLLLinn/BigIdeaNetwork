// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
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
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.ideas', {
    url: '/ideas',
    views: {
      'tab-ideas': {
        templateUrl: 'templates/tab-ideas.html',
        controller: 'IdeasCtrl'
      }
    }
  })
  //This is for the coverflow, it is stored under the idea cloud
  //please set the view same as the idea so that we have the back button automatically, and is stored under the view of this particular tab
  .state('tab.idea-album', {
    url: '/ideas/idea-album',
    views: {
      'tab-ideas': {
        templateUrl: 'templates/idea-album.html',
        controller: 'IdeasAlbumCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.account-edit', {
    url: '/account/edit',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account-edit.html',
        controller: 'AccountEditCtrl'
      }
    }
  })
.state('tab.my-project', {
    url: '/account/my-project',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-project.html',
        controller: 'projectctrl'
      }
    }
  })
.state('tab.project-edit', {
    url: '/account/project-edit',
    views: {
      'tab-account': {
        templateUrl: 'templates/project-edit.html',
        controller: 'ProjectEditCtrl'
      }
    }
  }) 
 ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/ideas');

});
