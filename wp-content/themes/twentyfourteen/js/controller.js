 var americaTrip = angular.module('americaTrip', [])
 .controller('mainBodyControl', function($scope, $http){
	 $scope.init = function() {
	 alert('tetdsadas ');
	 	$scope.mainBodyControl();
	 	//$scope.isotope();
	 }
	
	$scope.mainBodyControl = function(){
		alert('tetdsadas ');
		
				
		$http({method: 'GET', url: '/?json=1'}).
		success(function(data, status, headers, config) {
	      
	      $scope.posts = data.posts;
	      console.log(data.posts);
	           
	    }).error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	    }
	    
	    function postHover(){
		    alert('sd');
	    }
	    
	    $scope.isotope = function(){
	    alert('tetdsadas ');

		    $(window).bind("load", function() {
			$('.isotopeX').delay(100).isotope({
			  // options
			  itemSelector : '.element-item',
			  layoutMode : 'fitRows'
		  	}); 
		});
	    }
	    
	    
		// end angular

	
 });
	 
	
	

