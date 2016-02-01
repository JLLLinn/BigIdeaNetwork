angular.module('starter.controllers', ['ksSwiper'])

.controller('IdeasCtrl', function($scope) {
  try {
    TagCanvas.Start('myCanvas','tags',{
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      wheelZoom: false,
    });
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }


})

.controller('IdeasAlbumCtrl', function($scope) {
  $scope.swiper = {};
    $scope.next = function() {
        $scope.swiper.slideNext();
    };
    $scope.onReadySwiper = function(swiper) {
        console.log('onReadySwiper');
        swiper.on('slideChangeStart', function() {
            console.log('slideChangeStart');
        });
    };
  $scope.slideheight = (screen.height)/2;
  $scope.testarray = [
    {name:"Improving the poverty condition in underdeveloped countries"},
    {name:"Teaching kids living in remote areas"},
    {name:"Improve medical facilities in rural areas"},
    {name:"fly"},
    {name:"newgo"},
  ];
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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: false
  };
});
