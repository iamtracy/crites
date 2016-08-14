  $('[data-smooth="smooth"]').on('click', function(event) {
    var target;
    var theWindow = $(window).width();
    target = this.hash;
    event.preventDefault();
    var navOffset;
    if(theWindow > 420){
      navOffset = 90
    }else{
      navOffset = 126;
    } 
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 650, function() {
      return window.history.pushState(null, null, target);
    });
  });
  /* onScroll show event    
  ============================*/
  $(window).scroll( function(){
    $('[data-scroll="show"]').each( function(i){
      var object_bottom = $(this).offset().top + $(this).outerHeight();
      var window_bottom = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( window_bottom > object_bottom  ){
        $('.client-image').fadeTo( 250, 1).addClass('fade-in-up',100)
      }
    });
  });
