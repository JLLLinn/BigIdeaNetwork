angular.module('starter.controllers', ['ksSwiper', 'angular-jqcloud'])

.controller('IdeasCtrl', function($scope, Ideas) {
  ideas = Ideas.all();
  words = [];
  var log = [];
   angular.forEach(ideas, function(value, key) {
      words.push({
        'text':value.category,
        'weight': value.ideas.length,
        'link': '#tab/ideas/idea-album/'+ value.id
      });
    });
   $scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
    $scope.words = words;
})

.controller('IdeasAlbumCtrl', function($scope, $state,$location,$stateParams, Ideas,$ionicPopup, $timeout) {
  $scope.ideas = Ideas.get($stateParams.categoryId);
  $scope.swiper = {autoHeight:"true"};
  $scope.next = function() {
      $scope.swiper.slideNext();
  };
  $scope.onReadySwiper = function(swiper) {
      console.log('onReadySwiper');
      swiper.on('slideChangeStart', function() {
          console.log('slideChangeStart');
      });
  };

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.wifi">',
    title: 'Enter Your Idea Under "'+$scope.ideas.category+'"' ,
    subTitle: 'Literally, Anything',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Go</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            //$location.path("/tab/account/project-edit");
            $state.go('tab.project-create');
            return $scope.data.wifi;
          }
        }
      }
    ]
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
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
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
.controller('projectctrl', function($scope, Requests) {
  $scope.projectname = "Chile HOPE Project";
  $scope.projectnameEnabled=false;
  $scope.slide=false;
  $scope.progress_list=[
    {
      name:"Brainstorm Ideas",
      detail:"Think about",
      projectEnabled:"False",
      display:false
    },
    {
      name:"Design mocks 4 app",
      detail:"Use mock tools to build a template application that would allow testing and demos.",
      projectEnabled:"False",
      display:true
    },
    {
      name:"Conduct Interview",
      detail:"Interview with several potential users in order to have a better understanding of how the product will work.",
      projectEnabled:"False",
      display:true
    }
  ];
   $scope.place_list=[
    {
      name:"Champaign"
    },
    {
      name:"Chicago"
    },
    {
      name:"Taipei"
    }
  ];
   $scope.request_list=Requests.all();
   $scope.remove = function(request) {
     Requests.remove(request);
    };

})
.controller('particctrl', function($scope) {
  $scope.projectname = "Help Blind Photographers";
  $scope.projectnameEnabled=false;
  $scope.slide=false;
  $scope.progress_list=[
    {
      name:"Brainstorm Ideas",
      detail:"Think about",
      projectEnabled:"False",
      display:false
    },
    {
      name:"Design mocks 4 app",
      detail:"Use mock tools to build a template application that would allow testing and demos.",
      projectEnabled:"False",
      display:true
    },
    {
      name:"Conduct Interview",
      detail:"Interview with several potential users in order to have a better understanding of how the product will work.",
      projectEnabled:"False",
      display:true
    }
  ];
   $scope.place_list=[
    {
      name:"Champaign"
    },
    {
      name:"Chicago"
    },
    {
      name:"Taipei"
    }
  ];
})
.controller('ProjectCreateCtrl', function($scope) {
  $scope.projectname = "Help Blind Photographers";
  $scope.projectnameEnabled=false;
})
.controller('AccountEditCtrl', function($scope) {
});
