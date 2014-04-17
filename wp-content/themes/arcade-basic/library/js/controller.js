 var americaTrip = angular.module('americaTrip', [])
 .controller('mainBodyControl', function($scope, $http){
	 $scope.init = function() {

     $scope.custom = true;
     showMenu();
	 $scope.mainBodyControl();
	 //$scope.isotope();
	 }

   $scope.toggleCustom = function() {

       $scope.custom = $scope.custom === false ? true: false;
   }

	function showMenu(){
		   $('#secondary').hide();
		   

		   
	}
    $scope.heroImg = function(post){
        console.log(post[0].attachments[0].images.full.url);
        $('img.header-img').attr('src', $scope.posts[0].attachments[0].images.full.url);
        $('.lead').html('<a href="" id="map" class="btn btn-default btn-lg" >See Map</a> <a href="" id="posts" class="btn btn-default btn-lg" data-scroll-to="1080">See More Posts</a>');
        $('#map').click(function(event){
            event.preventDefault();
            $('.lead').append('<br><br><iframe style="margin: 0; padding: 0;" src="https://mapsengine.google.com/map/embed?mid=z1eO2PL6en0Y.k1glAy2owPTg" height="500" width="100%" frameborder="0"></iframe>');
        });
        $('#posts').click( function(event) {

            event.preventDefault();
            $( 'html, body' ).animate( {
                scrollTop: ( $('#posts').data( 'scroll-to' ) - 50 )
            }, 'slow', 'swing' );
        });
    }

	$scope.mainBodyControl = function(){

		$http({method: 'GET', url: '/?json=1'}).
		success(function(data, status, headers, config) {

	      $scope.posts = data.posts;
          $scope.heroImg(data.posts);
          console.log(data.posts);

	    }).error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	    }

	    $scope.isotope = function(){

		    $(window).bind("load", function() {
			$('#isotope').delay(100).isotope({
			  // options
			  itemSelector : '.element-item',
			  layoutMode : 'fitRows'
		  	});
		});
	    }


		// end angular


 });
