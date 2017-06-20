app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Alyssa'; 
  $scope.subtitle = 'Photography/photoshop skills.';
  $scope.angulartitle = 'Displayed in Angular.js.';
  $scope.photos = [ 
  { 
    name: 'Dichotomy', 
    caption: 'A contrast of ideas within oneself', 
    picture: 'alyssa4.jpg',
    alt: 'Dichotomy',
    class: 'img-responsive'
  }, 
  { 
    name: 'Lens Flare', 
    caption: 'Contemplative picture with lens flare', 
    picture: 'alyssaflare.jpg',
    alt: 'Lens Flare'
  },
  { 
    name: 'Smiling through darkness', 
    caption: 'Being happy no matter what comes your way', 
    picture: 'alyssadark.jpg',
    alt: 'Smile'
  },
  { 
    name: 'Eye Single', 
    caption: 'Beauty is in the eye', 
    picture: 'alyssatempleeye.png',
    alt: 'Eye Single'
  },
  { 
    name: 'Rural America', 
    caption: 'A water tower of a small town', 
    picture: 'rexwatertower.jpg',
    alt: 'Water tower'
  }
];
 $scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
  $scope.minusOne = function(index) { 
  $scope.products[index].dislikes += 1; 
};
 
}]);