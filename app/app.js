var app = angular.module('angularTable', ['angularUtils.directives.dirPagination','ngJsonExportExcel']);

app.controller('listdata',function($scope, $http){
	
	            $( "#datepicker" ).datepicker();
				

	$scope.users = []; //declare an empty array
	
		$scope.users = [{"id":"1","first_name":"a","last_name":"b","hobby":"tea"},{"id":"2","first_name":"c","last_name":"b","hobby":"tea"},
{"id":"3","first_name":"d","last_name":"b","hobby":"tea"},{"id":"4","first_name":"e","last_name":"b","hobby":"tea"},
{"id":"5","first_name":"f","last_name":"b","hobby":"tea"},{"id":"6","first_name":"g","last_name":"b","hobby":"tea"},
{"id":"7","first_name":"h","last_name":"b","hobby":"tea"},{"id":"8","first_name":"i","last_name":"b","hobby":"tea"},
{"id":"9","first_name":"j","last_name":"b","hobby":"tea"},{"id":"10","first_name":"k","last_name":"b","hobby":"tea"},
{"id":"11","first_name":"l","last_name":"b","hobby":"tea"}];
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
		$scope.displayRefUrl=function(refurl){
		alert("hi");
		$('#myModal').modal('show');
		return true;
	}
	var init = function () {
		  $scope.sort('id');
   // check if there is query in url
   // and fire search in case its value is not empty
};
// and fire it after definition
init();
});