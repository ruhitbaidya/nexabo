jQuery(document).ready(function ($) {

    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  
      
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
  });
 
