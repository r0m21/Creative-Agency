$(document).ready(function(){

    $('.carousel').carousel();

    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            }
        }

    });

  });