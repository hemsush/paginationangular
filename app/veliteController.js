var app = angular.module('veliteapp', ['angularUtils.directives.dirPagination','ngJsonExportExcel']);

app.controller('velitecontroller',function($scope, $http){
	
	            $( "#datepicker" ).datepicker();
				

	$scope.velitelist = []; //declare an empty array
	
		$scope.velitelist = [{"totcount":"124354","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124355","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124356","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124357","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124358","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124359","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124360","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124361","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124362","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124363","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"},
{"totcount":"124364","resp":"500","respurl":"http://www.google.com","refurl":"dwarg#freghty#sdfhhydtth","gid":"abcd#efgh#ijkl#mnopewjyeu3yruiehruegru35ry3uit5"}];
  //ajax request to fetch data into $scope.data
	  
	$('.modal-content').resizable({
    //alsoResize: ".modal-dialog",
    minHeight: 300,
    minWidth: 300
});
$('.modal-dialog').draggable();

$('#myModal').on('show.bs.modal', function () {
    $(this).find('.modal-body').css({
        'max-height':'100%'
    });
});
	
	$scope.sort = function(keyname){
		
		$scope.sortKey = keyname;   //set the sortKey to the param passed
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa
	}
		$scope.displayRefUrl=function(veliteitem){
		var	refurl= veliteitem.refurl;
		var strHtmlContent="<ul>";
		if(refurl!=null&& refurl!="" && refurl!="undefined"){
			var refArray=refurl.split("#");
			for(i=0;i<refArray.length;i++){
				strHtmlContent+="<li>"+refArray[i]+"</li>";
			}
			strHtmlContent+="</ul>";
			$('#refmodalcontent').html(strHtmlContent);
		$("#modal-backdrop").css("background-color", ""); 
		$('#refModal').modal('show');
		return true;
	}
	
		}

	var init = function () {
		  $scope.sort('totcount');
   // check if there is query in url
   // and fire search in case its value is not empty
};
// and fire it after definition
init();
});