$(document).ready(function(){

  //hamburger toggle
  $('.nav__icon').click(function(){
    $(this).toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end hamburger toggle

  //menu close on link click
  $('#mobile-about, #mobile-services, #mobile-testimonials, #mobile-contact').click(function(){
    $('.nav__icon').toggleClass('open');
    $('#menu').toggleClass('menu-open');
  });
  //end menu close

  //WOW animate
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  $(window).scroll(function() {
    if ($(document).scrollTop() >= 70 ) {
      $(".nav").css('background', 'rgba(255, 255, 255, 0.90)');
      $(".nav__logo--second").css('fill', '#5BCEBB');
    } else {
      $(".nav").css('background', 'transparent');
      $(".nav__logo--second").css('fill', 'white');
    }
  });

});
