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
 