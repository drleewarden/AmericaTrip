'use strict';
americaTrip.controller('mainBodyControl', function ($scope, $http, cookies) {
  ////////////////////////////
  // initialise
  ////////////////////////////
  $scope.init = function () {
    console.log('controller');
    //cookies.checkCookies();
    $scope.custom = true;
    showMenu();
    dragTarget();
    $scope.mainBodyControl();
    mouseDown();
    slider();

    setTimeout(function () {
      $scope.isotope();
      filter();

    }, 100);

  };

  $scope.toggleCustom = function () {

    $scope.custom = $scope.custom === false ? true : false;
  };

  function showMenu() {
    $('#secondary').hide();
  }
  // ************ HERO slider ************* //

  $scope.heroImg = function (post) {
    //console.log(post[0].attachments[0].images.full.url);
    $('img.header-img').attr('src', $scope.posts[0].attachments[0].images.full.url);
    $('.lead').html('<a href="" id="map" class="btn btn-default btn-lg" >See Map</a> <a href="#" id="posts" class="btn btn-default btn-lg" data-scroll-to="1080">See More Posts</a>');
    $('#map').click(function (event) {
      event.preventDefault();
      $('.lead').append('<br><br><iframe style="margin: 0; padding: 0;" src="https://mapsengine.google.com/map/embed?mid=z1eO2PL6en0Y.k1glAy2owPTg" height="500" width="100%" frameborder="0"></iframe>');
    });
    $('#posts').click(function (event) {

      event.preventDefault();
      $('html, body').animate({
        scrollTop: ($(window).height() + $('.jumbotron').height() + 15)
      }, 'slow', 'swing');
    });
  };
  // get data
  $scope.mainBodyControl = function () {

    $http({
      method: 'GET',
      url: '/?json=1'
    }).
    success(function (data) {
      $scope.posts = data.posts;
      $scope.heroImg(data.posts);
      console.log(data.posts);

    }).error(function () {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

  $scope.isotope = function () {
    console.log('isotope');
    var $container = $('#isotope');

    $(window).bind('load', function () {
        setTimeout(function () {
            $container.isotope({
                // options
                itemSelector: '.element-item',
                layoutMode: 'fitRows'

            });
        }, 900);

    });


  };

  function filter() {
    $('#posts-filter a').click(function (e) {
      //e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      // use filter function if value matches
      //filterValue = filterFns[filterValue] || filterValue;
      $('#isotope').isotope({
        filter: filterValue
      });

    });
  }

  $scope.blogClicked = function (title, id) {
    //cookies.checkCookies();
    cookies.cookieClick(title, id);

  };

  function dragTarget() {
    var length = $('.entry-content .gall'),
      img = $('.entry-content .gall img'),
      total = 0;
    if ($(window).width() > 700) {
      $('.entry-content .gall img').each(function () {
        var $width = $(this).width();
        $(this).parent().prepend('<div class="template">enlarge<div class="enlargeBtn"></div></div>');
        total += parseInt($(this).width(), 10);

      });
    }

    // change width of slider
    $(length).width(total + (img.length * 15));

    $('.entry-content .gall').click(function (e) {
      e.preventDefault();
    });
    // template slider hover
    $('.template').hover(function () {
      hoveElem($(this), 1);
      $(this).siblings('img').css({
        opacity: 0.4
      });

    }, function () {
      rempveElem($(this), 0.4);
      $(this).siblings('img').css({
        opacity: 1
      });

    }).click(function () {
      $('#mainpopup').remove();
      $('body').prepend('<div id="mainpopup"><img src="' + $(this).siblings('img').attr('src') + '"/></div>');
      $('#mainpopup').click(function () {
        $(this).remove();
      });

    });

    // image slider hover
    $(img).hover(function () {
      hoveElem($(this), 0.4);
      var wid = $(this).width();

      $(this).siblings('.template').css({
        opacity: 1,
        width: wid
      });
    }, function () {
      rempveElem($(this), '1');
      $(this).siblings('.template').css({
        opacity: 0
      });
    });

    // ***************   click and drag img  *************** //

    //    var mouseDown = false,
    //      minus = total - $(window).width(),
    //      innerX = 0;

    //    $('.entry-content .gall').on('mousedown', function (e) {
    //      e.preventDefault();
    //      innerX = e.pageX - $(this).offset().left;
    //      //innerY = e.pageY - $(this).offset().top;
    //      mouseDown = true;
    //    }).on('mouseup', function (e) {
    //      e.preventDefault();
    //      mouseDown = false;
    //    });
    //
    //    $(document).on('mouseup', function (e) {
    //      mouseDown = false;
    //    })
    //
    //    $(document).on('mousemove', function (e) {
    //      if (mouseDown) {
    //        var m = {
    //          x: e.pageX - innerX
    //        };
    //        if (m.x < 1 && m.x > -minus) {
    //          $('.entry-content .gall').css({
    //            left: m.x
    //          });
    //        }
    //
    //      }
    //    });

  }


  // hover img
  function hoveElem(elem, num) {
    $(elem).css({
      opacity: num
    });
  }

  function rempveElem(elem, num) {
    $(elem).css({
      opacity: num
    });
  }

  function slider() {
    var $imgGal = $('.entry-content .gall');
    $($imgGal).carouFredSel({
      responsive: true,

      scroll: {
        items: 1,
        duration: 9900,
        easing: 'swing'

      },
      pagination: '#gallery_list_controls',
      swipe: {
        onMouse: true,
        onTouch: true
      },
      items: {
        start: -1,
        visible: {
          min: 3,
          max: 3
        }
      }
    });
  }

  function mouseDown() {
    var innerX = 0;
    $('.entry-content .gall').swipe({

      swipeLeft: function () {
        //alert('next');
        $('.entry-content .gall').trigger('next');

      },

      swipeRight: function () {
        //alert('pre');
        $('.entry-content .gall').trigger('prev');

      },
      excludedElements: []
    });

  }


  // end angular


});
