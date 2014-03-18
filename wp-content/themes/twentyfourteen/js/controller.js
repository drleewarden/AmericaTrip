 var americaTrip = angular.module('mainBodyControl', ['iso.directives']);
	
	function mainBodyControl($scope, $http){
		//halert('tetdsadas ');
		$scope.items = [
		{name: 'colman'},
		{name: 'lee-warden'},
		{name: 'walker', quantity: 5, price: 6.95,  animal:'frog'}
		
		];
		$scope.xList=[
        {name:'a', number:'1', date:'1360413309421', class:'purple'}
        ,{name:'b', number:'5', date:'1360213309421', class:'orange'}
        ,{name:'c', number:'10', date:'1360113309421', class:'blue'}
        ,{name:'d', number:'2', date:'1360113309421', class:'green'}
        ,{name:'e', number:'6', date:'1350613309421', class:'green'}
        ,{name:'f', number:'21', date:'1350613309421', class:'orange'}
        ,{name:'g', number:'3', date:'1340613309421', class:'blue'}
        ,{name:'h', number:'7', date:'1330613309001', class:'purple'}
        ,{name:'i', number:'22', date:'1360412309421', class:'blue'}
        ] 
		
		$http({method: 'GET', url: 'http://localhost:8888/?json=1'}).
		success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	      //console.log(data.posts[0].excerpt);
	      $scope.posts = data.posts;
	      console.log(data.posts)
	      /*
	      
			angular.forEach(data, function(value, index){
					      var details = value.posts.excerpt;
			                
				      });
		*/
	      
      
	    }).error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	    
		// end angular

	}
	
	(function($){
		$(function(){
			init();
		})
		
		var init = function(){
			var $container = $('#container');
			// init
			$container.isotope({
			  // options
			  itemSelector: '.item',
			  layoutMode: 'fitRows'
			});			
		}
		
	})(jQuery);
	

