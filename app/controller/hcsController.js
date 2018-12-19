(function(){
// home page controller

animateApp.controller('hcsController', function($scope) {
    $scope.pageClass = 'page-hcs.html';
    $scope.logoHcs = "HCS-logo.png";
    $scope.pelajariOff = "pelajari-lebih-lanjut-button-off.png";
    $scope.pelajariOn  = "pelajari-lebih-lanjut-button-on.png";
    $scope.pelajariHcsTentangOff ="tentang-hasil-test-button-off.png";
    $scope.pelajariHcsTentangOn ="tentang-hasil-test-button-on.png";

    $scope.fbWhite = "fb-white.png";
    $scope.fbColor = "fb-colored.png";

    $scope.igWhite ="instagram-white.png";
    $scope.igColor = "instagram-colored.png";

    $scope.tabelKanker = "Tabel.jpg";
});


}());
