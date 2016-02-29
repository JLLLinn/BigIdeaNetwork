angular.module('starter.controllers', ['ksSwiper', 'angular-jqcloud'])

.controller('IdeasCtrl', function($scope, Ideas) {
  ideas = Ideas.all();
  words = [];
  $scope.searching = false;
  $scope.search_data = {
      text: ''
    }
    //var log = [];
  angular.forEach(ideas, function(value, key) {
    words.push({
      'text': value.category,
      'weight': value.ideas.length,
      'link': '#tab/ideas/idea-album/' + value.id
    });
  });
  $scope.colors = ["#285072", "#fc4e2a", "#388383", "#9EB695", "#E9AA3B"];
  $scope.words = words;


  $scope.matched_ideas = new Array();
  $scope.$watch('search_data.text', function(newValue, oldValue) {
    if (newValue != "") {
      $scope.searching = true;
      $scope.matched_ideas = Ideas.search_category(newValue);
    } else {
      $scope.searching = false;
    }
  });
})

.controller('IdeasAlbumCtrl', function($scope, $state, $location, $stateParams, Ideas, $ionicPopup, $timeout) {
  $scope.ideas = Ideas.get($stateParams.categoryId);
  $scope.showing_ideas = new Array($scope.ideas.ideas.length).fill(true);
  $scope.liked_ideas = new Array($scope.ideas.ideas.length).fill(false);
  $scope.project_showing_idx = new Array($scope.ideas.ideas.length).fill(0);
  $scope.swiper = {
    autoHeight: "true",

  };

  $scope.onReadySwiper = function(swiper) {

    swiper.on('slideChangeStart', function() {

      console.log('slideChangeStart');
    });
  };

  $scope.onSwipeDown = function(idx) {
    if (!$scope.showing_ideas[idx]) {
      var cur_proj_idx = $scope.project_showing_idx[idx];
      if (cur_proj_idx < 1) {
        return;
      } else {
        //turn page to show next project
        $scope.project_showing_idx[idx] -= 1;
      }
    }
  }
  $scope.onSwipeUp = function(idx) {
    if (!$scope.showing_ideas[idx]) {
      var cur_proj_idx = $scope.project_showing_idx[idx];
      if (cur_proj_idx >= $scope.ideas.ideas[idx].projects.length - 1) {
        return;
      } else {
        //turn page to show next project
        $scope.project_showing_idx[idx] += 1;
      }
    }
  }

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<textarea type="text" style="border:1px dashed #999999; height:20vh" ng-model="data.wifi"></textarea>',
      title: $scope.ideas.category,
      cssClass: 'new-idea-popup',
      subTitle: 'Enter Your Idea',
      scope: $scope,
      buttons: [{
        text: 'Cancel',
        type: 'button-small button-clear'
      }, {
        text: 'Go',
        type: 'button-small button-clear button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            //$location.path("/tab/account/project-edit");
            $state.go('tab.project-create', {'idea_name': $scope.data.wifi});
            return $scope.data.wifi;
          }
        }
      }]
    });

    myPopup.then(function(res) {
      console.log('Tappedd!', res);

    });
    /*
      $timeout(function() {
         myPopup.close(); //close the popup after 3 seconds for some reason
      }, 3000);
    */
  };

  //$scope.slideheight = (screen.height)/2;
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(project_chat, chat) {
    Chats.remove(project_chat, chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Account) {
    $scope.settings = {
      enableFriends: false
    };
    $scope.accountInfo = Account.all();
  })
  .controller('projectctrl', function($scope, Project) {
    $scope.project = Project.all();
    $scope.request_remove = function(request) {
      Project.request_remove(request);
    };

  })
  .controller('particctrl', function($scope, ParticProjects) {
    $scope.project_list = ParticProjects.all();
  })
  .controller('RandomProjectCtrl', function($scope, RandomProjects) {
    $scope.project_list = RandomProjects.all();
  })
  .controller('ProjectCreateCtrl', function($scope, $stateParams, CreateProjects) {
    $scope.idea_name = $stateParams.idea_name;
    $scope.default_project = CreateProjects.all();
  })
  .controller('AccountEditCtrl', function($scope, Account) {
    $scope.accountInfo = Account.all();
  });
