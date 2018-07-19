
routerApp.controller('dashboardController',['$scope','$location','$http','$window',function(scope,loc,http,$window)
{
	scope.dashboardData='';
	/*http.get("../js/customers.php")
    .then(function (response) 
	{
		scope.names = response.data.records;
	});*/
	 http.get("http://10.53.172.9:8080/vnfdashboard")
    .then(function (response) {
		console.log(JSON.stringify(response.data));	
				var data=JSON.stringify(response.data);					
				var ojdata=JSON.parse(data);	
		scope.dashboardData = ojdata;
		//console.log(scope.dashboardData)
		//console.log(scope.dashboardData[0].ImageName);
	});	
		//console.log(scope.dashboardData)	
	scope.checkReport = function(ReportPath) {
		//console.log(ReportPath)
		http.get(ReportPath)
		.then(function (response) {
			console.log(ReportPath)
			window.open(
				ReportPath,
				'_blank' 
			  );	
		}).catch(function(error) {
			alert("Report not yet generated/Not available, Please try again after some time!!!")
			//md-disable-backdrop="true"
			/*$mdDialog.show(				
				$mdDialog.alert()				  
				  .clickOutsideToClose(true)
				  .title('This is an alert title')
				  .textContent('You can specify some description text in here.')				  
				  .ok('OK')
				  
			  );*/
			

		})
			
		
		
		
	}
	

	

	
	
}]);
