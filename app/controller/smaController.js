(function(){

animateApp.controller('smaController' , function($scope, $http){
    $scope.headerImage ="HEADER-IMAGE.jpg";
    //section 1
    $scope.sma ="LOGO-SMA-WEBSITE.PNG";
    
    $scope.section1 = 
    [
        {
            headerSection : "Deteksi kanker dan tentukan penanganan yang tepat sejak dini"
        },
        {
            
        }
    ];

    $scope.captionSection = 
    [
        {
           caption :   "Next Generation Sequencing"
        },
        {
            caption : "Akurasi 99%"
        },
        {
            caption : "Sample dari tissue biospy atau sample darah"
        },
        {
            caption : "Lebih cepat dengan pemeriksaan gen menyeluruh"
        }                
    ];
    
    $scope.section2=
    [
        {
            headerSma2: "Precision Medicine",
            captionSma2: 
            "Penanganan dan pengobatan untuk pasien kanker konvensional pada umumnya hanya berdasarkan tipe kanker yang dimiliki oleh pasien."+ 
            " Namun, studi menunjukkan bahwa beberapa tipe pengobatan seperti kemoterapi terentu hanya efektif di 32% populasi, dan 68% dari" +
             "pengobatan tersebut sia-sia. Dengan menganalisis profil genetik dari sel tumor atau kanker tersebut, obat atau tipe kemoterapi" + 
             "yang tepat dapat diberikan sesuai dengan kebutuhan dan menghindari berkembangnya kanker secepat mungkin.",
            referensiSma2: "-Source:Genome Medicine(2016) 8:109-"
        }
    ];

    $scope.section3=
    [
        {
            headerSma3 : "Pemeriksaan Menyeluruh",
            captionSma3 : "Somatic mutation analysis dapat menganalisis sel tumor atau kanker secara komprehensif, lebih dari 50 gen dapat dianalisis dalam 1 pemeriksaan, sehingga dokter dan pasien dapat menentukan proses penanganan yang lebih cepat dengan menggunakan sampel yang terbatas."
        },
        {
            headerSma3 : "Mengetahui Secara mendetail mutasi gen yang terjadi pada sel kanker",
            captionSma3 : "Semua kanker diakibatkan oleh perubahan genetik, namun 1 tipe kanker bisa diakibatkan oleh mutasi gen yang berbeda pada individu yang berbeda. Somatic mutation analysis dapat menganalisis secara mendetil dan akutat, mutasi yang menyebabkan perkembangan sel kanker tersebut."
        },
        {
            headerSma3 : "Membantu dokter untuk menentukan jenis pengobatan yang tepat",
            captionSma3 : "Tumor atau kanker dengan profil genetik yang berbeda memiliki respon yang berbeda pada pengobatan tertentu. Melalui somatic mutation analysis, sel tumor atau kanker dianalisis untuk membantu dokter menentukan jenis pengobatan yang tepat untuk mendapatkan hasil yang maksimal."
        }
    ]


});





}());