$(document).ready(function(){

    // Init carousel bootstrap.
    $('.carousel').carousel();

    // Réglages du carousel (owl-carousel) + responsive.
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

    /* $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
      });
    console.log($('body').scrollspy({ target: '#navigation' }));
 */

    $('body').scrollspy({
        target: '#navigation',
        offset: $(window).height() / 2
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
        wScroll > 1 ? $('#navigation').addClass('fixed-top justify-content-around sticky-nb-bg') : $('#navigation').removeClass('fixed-top justify-content-around sticky-nb-bg');
        wScroll > 1 ? $('.nav-link').addClass('sticky-nb-liens') : $('.nav-link').removeClass('sticky-nb-liens');
        wScroll > 1 ? $('#logo').attr('src', 'img/logo.png') : $('#logo').attr('src', 'img/logo-alt.png');
                     
	});
  });