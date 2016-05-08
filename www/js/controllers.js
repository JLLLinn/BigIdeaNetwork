angular.module('starter.controllers', ['ksSwiper', ])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('NewPostCtrl', function($scope, Posts) {
  $scope.posts = Posts.all();
})

.controller('IdeasCtrl', function($scope, Ideas) {
  ideas = Ideas.all();
  words = [];
  $scope.searching = false;
  $scope.search_data = {
    text: ''
  };
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


  $scope.matched_ideas = [];
  $scope.$watch('search_data.text', function(newValue, oldValue) {
    if (newValue !== "") {
      $scope.searching = true;
      $scope.matched_ideas = Ideas.search_category(newValue);
    } else {
      $scope.searching = false;
    }
  });
})

.controller('IdeasAlbumCtrl', function($scope, $state, $location, $stateParams, Ideas, $ionicPopup, $timeout) {
  var img_idx_array = new Array(99);
  for (var i = 1; i < 100; i++) {
    img_idx_array[i - 1] = i;
  }
  $scope.img_idx_selected_array = new Array(0);
  $scope.searching_loading = false;
  $scope.prompt_interested_people = "";
  $scope.search_data = {
    text: ''
  };
  var search_promise = null;
  $scope.test_name = "1";
  $scope.$watch('search_data.text', function(newValue, oldValue) {
    $scope.searching_loading = true;
    if (newValue !== "") {
      if (search_promise) {
        $timeout.cancel(search_promise);
      }
      search_promise = $timeout(function() {
        var selected_size = Math.floor(Math.random() * 40);
        if (selected_size === 0) {
          $scope.prompt_interested_people = "Hi Bubler! You are the first one in your area with '" + newValue + "' in mind, why not create your first project under that idea!";
        } else {
          $scope.prompt_interested_people = selected_size + " bulbers around you are also interested in '" + newValue + "'";
        }
        //console.log("selected_size"+selected_size);
        $scope.img_idx_selected_array = getRandomSubarray(img_idx_array, selected_size);
        //console.log("array: "+$scope.img_idx_selected_array);
        $scope.searching_loading = false;
      }, 1000);
    } else {
      if (search_promise) {
        $timeout.cancel(search_promise);
      }
    }
  });

  var getRandomSubarray = function(arr, size) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - size,
      temp, index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  };
  $scope.ideas = Ideas.get($stateParams.categoryId);
  $scope.showing_ideas = new Array($scope.ideas.ideas.length).fill(true);
  $scope.liked_ideas = new Array($scope.ideas.ideas.length).fill(false);
  $scope.project_showing_idx = new Array($scope.ideas.ideas.length).fill(0);
  $scope.swiper = {
    autoHeight: "true",
  };

  $scope.onReadySwiper = function(swiper) {

    swiper.on('slideChangeEnd', function() {
      $scope.showing_ideas.fill(true);
      $scope.project_showing_idx.fill(0);
      $scope.$apply();
    });
  };
  $scope.prevProj = function($event, idx) {
    $event.stopPropagation();
    $scope.project_showing_idx[idx] = $scope.project_showing_idx[idx] - 1;
  };

  $scope.nextProj = function($event, idx) {
    $event.stopPropagation();
    $scope.project_showing_idx[idx] = $scope.project_showing_idx[idx] + 1;
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
  };
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
  };

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {
    $scope.data = {
      "idea_name":""
    };

    // An elaborate, custom popup
    /*jshint multistr: true */
    var myPopup = $ionicPopup.show({
      // template: "<span class='input input--akira'>\
      //           	<input class='input__field input__field--akira' id='input-1' />\
      //           	<label class='input__label input__label--akira' for='input-1'>\
      //           		<span class='input__label-content input__label-content--akira'>What's your Big Idea</span>\
      //           	</label>\
      //           </span>",
      // template: '<textarea type="text" id="big-idea-input" ng-model="data.idea_name"></textarea>',
      templateUrl: 'templates/idea-album-popupbody.html',
      title: $scope.ideas.category,
      cssClass: 'new-idea-popup',
      // subTitle: "What's your big idea?",
      scope: $scope,
      buttons: [{
        text: 'Cancel',
        type: 'button-small button-clear'
      }, {
        text: 'Go',
        type: 'button-small button-clear button-positive',
        onTap: function(e) {
          if (!$scope.data.idea_name) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            //$location.path("/tab/account/project-edit");
            $state.go('tab.project-create', {
              'idea_name': $scope.data.idea_name
            });
            return $scope.data.idea_name;
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

.controller('NewsProjectCtrl', function($scope, News) {
  $scope.news = News.all();
  /*$scope.remove = function(project_chat, chat) {
    Chats.remove(project_chat, chat);
  };*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Account) {
    $scope.settings = {
      enableFriends: false
    };
    $scope.accountInfo = Account.all();
    $scope.step_remove = function(step) {
      Account.step_remove(step);
    };
  })
  .controller('projectctrl', function($scope, Project) {
    $scope.project = Project.all();
    $scope.request_remove = function(request) {
      Project.request_remove(request);
    };

  })
  .controller('particctrl', function($scope, $stateParams, ParticProjects) {
    $scope.project = ParticProjects.get($stateParams.id);
  })
  .controller('RandomProjectCtrl', function($scope, $stateParams, RandomProjects) {
    $scope.project = RandomProjects.get($stateParams.id);
  })
  .controller('ProjectCreateCtrl', function($scope, $stateParams, $ionicLoading, $timeout, $state, $ionicHistory, CreateProjects) {

    $scope.done = function() {
      console.log("hey");
      $ionicLoading.show({
        template: 'Project Created'
      });

      $timeout(function() {
        $ionicLoading.hide();
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('tab.ideas', {
          cache: false
        });
      }, 1000);

    };


    $scope.idea_name = $stateParams.idea_name;
    $scope.interessted_ppl = [1, 2, 3, 5, 6];
    $scope.participants = [];
    $scope.add_parti = function(idx) {
      var i = $scope.interessted_ppl.indexOf(idx);
      if (i != -1) {
        $scope.interessted_ppl.splice(i, 1);
      }
      $scope.participants.push(idx);
    };
  })
  .controller('AccountEditCtrl', function($scope, Account) {
    $scope.accountInfo = Account.all();
  });
