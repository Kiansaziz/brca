
(function(){
    // home page controller
    
    animateApp.controller('homeController', function($scope) {
        $scope.pageClass = 'page-home.html';
        $scope.hcsBw = "HCS-bw.png";
        $scope.hcs = "HCS.png";
        $scope.brcaBw = "brca-bw.png";
        $scope.brca = "brca.png";
        $scope.smaBw = "SMA-bw.png";
        $scope.sma ="SMA.png";
        


        $scope.blog = "Haruskah-Menghindari-Kucing-Saat-Hamil.jpg";

        $scope.cancervueBottom = "cancervue-white-bottom.png";

        $scope.fbWhite = "fb-white.png";
        $scope.fbColor = "fb-colored.png";

        $scope.igWhite ="instagram-white.png";
        $scope.igColor = "instagram-colored.png";

        $scope.fb ="https://www.facebook.com/cancervue/";
        $scope.ig = "https://www.instagram.com/cancervue/";
       
    });
    
    
    }());