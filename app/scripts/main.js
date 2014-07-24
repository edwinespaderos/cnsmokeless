$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$('#btn-confirm').click(function(){
    $("#age-verefier").addClass("active");
});

var  n = $(".nav");
    ns = "nav-scroll";
    hdr = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    n.addClass(ns);
  } else {
    n.removeClass(ns);
  }
});