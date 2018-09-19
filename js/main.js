(function ($){
	"use strict";

	$(document).ready(function(){

 	/* ----------------------------------------------------------- */
   /*  Hero Area
  /* ----------------------------------------------------------- */
  $(".hero-area").owlCarousel({
  		items: 1,
  		autoplay: true,
  		autoplayHoverPause:true,
  		loop: true,
  		nav: true,
  		dots: false,
  		mauseDrag: true,
  		touchDrag: true,
  		smartSpeed: 800,
  		navText:[" <i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  		});


 	/* ----------------------------------------------------------- */
   /*  Service Area
  /* ----------------------------------------------------------- */
  $(".service-list").owlCarousel({
  		items: 4,
  		autoplay: false,
  		loop: true,
  		nav: true,
  		dots: false,
  		navText:[" <i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  		});


  	/* ----------------------------------------------------------- */
   /*  Testimonial Area
  /* ----------------------------------------------------------- */

  $(".single-testimonial").owlCarousel({
  		items: 1,
  		autoplay: true,
  		loop: true,
  		nav: true,
  		dots: false,
  		smartSpeed: 800,
  		navText:[" <i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  		});


	});

}(jQuery));
