(function(){
// Contact page controller

animateApp.controller('contactController',['$scope', function($scope ,$http) {
    $scope.pageClass = 'page-contact';

    $scope.fbWhite = "fb-white.png";
    $scope.fbColor = "fb-colored.png";

    $scope.igWhite ="instagram-white.png";
    $scope.igColor = "instagram-colored.png";
    $scope.cancervueBottom = "cancervue-white-bottom.png";

      $scope.ph_numbr = /^\+?\d{10}$/;
        $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    $scope.fb="https://www.facebook.com/cancervue/";
    $scope.ig= "https://www.instagram.com/cancervue/";
}]);

}());
