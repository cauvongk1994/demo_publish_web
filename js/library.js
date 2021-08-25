/*js menu mobile*/
$(document).ready(function ($) {  
	$('.toggle__menu').on('click', function() {
		$('.offsetmenu').addClass('offsetmenu__on');
		$('.body__overlay').addClass('is-visible'); 
	});

	$('.offsetmenu__close__btn, .body__overlay').on('click', function() {
		  $('.offsetmenu').removeClass('offsetmenu__on');
		  $('.body__overlay').removeClass('is-visible');
	}); 
	// --  js CheckOut Page*/
	$('[name="payment_method"]').on('click', function () { 
		var $value = $(this).attr('value'); 
		$('.sub_show').slideUp();
		$('.payment_method_' + $value).slideToggle(); 
	});
	// --  js Giaohang Page*/
	$('[name="gh_method"]').on('click', function () { 
		var $value = $(this).attr('value'); 
		$('.sub_show').slideUp();
		$('.gh_method_' + $value).slideToggle(); 
	});  
    // -- js magiamgia 
	$('.mgg-code').click(function () {
		$('.mgg-inputcode').slideToggle(500);
	});		 
	
	$('.search-mb').click(function () {
		$('.resuiltSearch').slideToggle(300);
	});	
	// -- js xuathoad
	$('#is_xhd').click(function () {
		$('#xhd-group').slideToggle(600);
	});   
    /*----- plus-minus-button ---- */
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
     $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
     $(".qtybutton").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
         // Don't allow decrementing below zero
        if (oldValue > 1) {
       var newVal = parseFloat(oldValue) - 1;
       } else {
       newVal = 1;
        }
        }
      $button.parent().find("input").val(newVal);
     });
	/*---------------------  mobile-menu-2  --------------------- */
    var $akrSubNav = $('.mobile-menu'),
        $akrSubMenu = $akrSubNav.find('.dropdown');
    
    /*Add Toggle Button With Off Sub Menu*/
    $akrSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');
    
    /*Close Off Sub Menu*/
    $akrSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $akrSubNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
	

});

$(document).ready(function() {  
    function toggleNavbarMethod() {  
        if ($(window).width() > 768) {  
            $('.cate-filters .dropdown').on('mouseover', function(){  
                $('.dropdown-toggle', this).trigger('click');   
            }).on('mouseout', function(){  
                $('.dropdown-toggle', this).trigger('click').blur();  
            });  
        }  
        else {  
            $('.cate-filters .dropdown').off('mouseover').off('mouseout');  
        }  
    }  
    toggleNavbarMethod();  
    $(window).resize(toggleNavbarMethod);  
});  

$(document).ready(function () {
	$('.collapse.in').prev('.panel-heading').addClass('active');
	$('#bs-collapse, #accordion')
		.on('show.bs.collapse', function (a) {
			$(a.target).prev('.panel-heading').addClass('active');
		})
		.on('hide.bs.collapse', function (a) {
			$(a.target).prev('.panel-heading').removeClass('active');
		});
});



$('.js-side-drawer-toggler').on('click', function() {
	$('.side-drawer-fix').toggleClass('is-opened');
	$( 'body' ).toggleClass( 'side-drawer--is-opened' );
	$('.exit-side-drawer').addClass('active'); 
});
 
 
$('.exit-side-drawer, .close_btn_filter').on('click', function() {
	$('.side-drawer').removeClass('is-opened');
	$( 'body' ).removeClass( 'side-drawer--is-opened' );
	$('.exit-side-drawer').removeClass('active');
}); 

// js nav-top 
var didScroll;
var lastScrollTop = 0;
var delta = 5; 
var navbarHeight = $('.vHeader').outerHeight();

$(window).scroll(function(event){
    didScroll = true; 
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
	
}, 100);

function hasScrolled() {
    var st = $(this).scrollTop(); 
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return; 
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#headerTop').addClass('menu-fix');  
		$('.wp-main-menu').addClass('nav-up');
        $('.cm-bg-carousel').addClass('fix');  	 
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.wp-main-menu').removeClass('nav-up');   
			$('.cm-bg-carousel').removeClass('fix'); 
			$('#headerTop').removeClass('menu-fix');   
			if ($(this).scrollTop() >50) {
			    $('.wp-main-menu').addClass('menu-fix animated');
			} else {
				$('.wp-main-menu').removeClass('menu-fix animated');
			}  
        }
    }
    
    lastScrollTop = st;
}
	
// -- js menu scroll header
 
$(document).ready(function(){
	$(window).scroll(function(){
	t = $(window).scrollTop();
	if(t > 42){
	$(".wp-header-mb").addClass("fixed");
	$(".wp-search-mb").addClass("fixed");
	}
	else{
	$(".wp-header-mb").removeClass("fixed");
	$(".wp-search-mb").removeClass("fixed");
	}
	});   
    
});	


/*------------------------------------    
 1. Search Bar
--------------------------------------*/ 
    
  $( '.search__open' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search__box__show__hide' );
    return false;
  });

  $( '.search__close__btn .search__close__btn_icon' ).on( 'click', function () {
    $( 'body' ).toggleClass( 'search__box__show__hide' );
    return false;
  });
 
 
/*------------------------------------    
  2. Shopping Cart Area
--------------------------------------*/

  $('.cart__menu').on('click', function() {
    $('.shopping__cart').addClass('shopping__cart__on');
    $('.body__overlay').addClass('is-visible');

  });

  $('.offsetmenu__close__btn').on('click', function() {
      $('.shopping__cart').removeClass('shopping__cart__on');
      $('.body__overlay').removeClass('is-visible');
  });
  
// aristino to scroll menu
$(window).scroll(function () {
	
		if ($(this).scrollTop() > 30) {
			$('.header-search').addClass('header-search-s animated');
		} else {
			$('.header-search').removeClass('header-search-s animated');
		}
	
   });

$(window).scroll(function () {
	
		if ($(this).scrollTop() > 50) {
			$('.add-fix').addClass('fix-checkout animated');
		} else {
			$('.add-fix').removeClass('fix-checkout animated');
		}
	
   });
   
$(window).scroll(function () {
	if ($(window).width() < 1300) {
		if ($(this).scrollTop() > 50) {
			$('.icon-email').addClass('icon-email-fix animated');
		} else {
			$('.icon-email').removeClass('icon-email-fix animated');
		}
	 }
   });
 
 
   
/*js radio*/
$('#cod').click(function(){
    $('.sub_show').css("display","none");
});
$('#momo').click(function(){
    $('.sub_show').css("display","none");
}); 
$('#atm').click(function(){
    $('.sub_show').css("display","block");
});

   
// js scroll Top 
jQuery(document).ready(function() {
	var offset = 600;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.scrollup').fadeIn(duration);
		} else {
			jQuery('.scrollup').fadeOut(duration);
		}
	});
	
	jQuery('.scrollup').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
	if ($(window).width() < 767){
		$("#sliderproduct").owlCarousel({
			items:1,
			nav: true,
			autoHeight:true,
			dots: true, 	
			loop: false,	
			smartSpeed:1000
		});	
	}
});	

// js hover
$(".hover-over").mouseover(function(){
  $(".overlay").addClass("overlay-visible");
});   
$(document).mouseover(function(a) {
  var n=$(".hover-over");
  n.is(a.target)||0!==n.has(a.target).length||$(".overlay").removeClass("overlay-visible");
}); 

$(".header-over").mouseover(function(){
  $(".bg-black").addClass("overlay-visible");
}); 
$(document).mouseover(function(a) {
  var n=$(".header-over");
  n.is(a.target)||0!==n.has(a.target).length||$(".bg-black").removeClass("overlay-visible");
}); 
/*js home slider banner*/
 
$( document ).ready(function() {
  var owl = $('.slide-banner');
  owl.owlCarousel({
      loop:true, 
	  autoHeight:true,
      margin:0,
	  autoplay:false,
	  autoplayTimeout: 15000,  
      nav:true,
	  navText: [  '', ''  ],
      dots:true, 
      items:1
  })
  owl.on('translate.owl.carousel',function(e){
    $('.owl-item video').each(function(){
      $(this).get(0).pause();
    });
  });
  owl.on('translated.owl.carousel',function(e){
    $('.owl-item.active video').get(0).play();
  })
  
});

 
/*js slide pro-detail*/
  
$('#slider-prodetail').owlCarousel({
    loop:false,
	autoplay:true,
    autoplayTimeout:10000,
    autoplaySpeed:500,
    smartSpeed:500,
    margin:0,
	lazyLoad:true,
    dots:false,
    nav:true, 
	navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
}) 

 

/*js slide pro-hover*/
$( document ).ready(function() {
  var owl = $('#slider-prohover');
  owl.owlCarousel({
      loop:false, 
      margin:0,
	  lazyLoad:true,
	  autoplay:false,
	  autoplayTimeout: 5000,  
      nav:true,
	  navText: [  '', ''  ],
      dots:false, 
      items:1
  })
   
});


/*js slide tin*/
$( document ).ready(function() {
  var owl = $('#slider-news');
  owl.owlCarousel({
      loop:true, 
      margin:0,
	  autoplay:true,
	  autoHeight:true,
	  autoplayTimeout: 5000,  
      nav:true,
	  navText: [  '', ''  ],
      dots:true, 
      items:1
  })
   
});


/*js slide store*/
$( document ).ready(function() {
  var owl = $('.slider-store');
  owl.owlCarousel({
      loop:true, 
      margin:0,
	  autoplay:true,
	  autoplayTimeout: 5000,  
      nav:false,
	  navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
      dots:true, 
      items:1
  })
   
});

$('#slider-wear ').owlCarousel({
    loop:false,
    margin:40,
    dots:false,
    nav:false, 
    autoplay:true,
    autoplayTimeout:8000,
    autoplaySpeed:1800,
    smartSpeed:1500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
}) 
 
$('#slider-recenly').owlCarousel({
    loop:false,
    margin:20,
    dots:false,
    nav:true,
	navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay:true,
    autoplayTimeout:8000,
    autoplaySpeed:1800,
    smartSpeed:1500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

$('#slider-spcl').owlCarousel({
    loop:false,
	autoplay:false,
    margin:1,
    dots:false,
    nav:true,
	navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay:true,
    autoplayTimeout:8000,
    autoplaySpeed:1800,
    smartSpeed:1500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

/*js zoom img chi tiet sp*/
$(function() {
    $("#zoom1").glassCase({
        'widthDisplay': 600,
        'heightDisplay': 800,
		'isHoverShowThumbs': false,
		'zoomPosition': 'inner',
        'nrThumbsPerRow': 5,
        'isSlowZoom': true,
        'colorIcons': '#000',
        'colorActiveThumb': '#F15129',
        'thumbsPosition': 'left'
    });
});

/*js zoom quickview*/
$(function() {
    $("#zoom-quick").glassCase({
        'widthDisplay': 450,
        'heightDisplay': 600,
		'isHoverShowThumbs': true,
		'zoomPosition': 'inner',
        'nrThumbsPerRow': 5,
        'isSlowZoom': true,
        'colorIcons': '#000',
        'colorActiveThumb': '#F15129',
        'thumbsPosition': 'left'
    });
	  $('.modal').on('shown.bs.modal', function (e) {
      $('#zoom-quick').resize(); 
    })
});


/*js sticky pro*/
$(function () { 
	  $('.bvstick').stickyNavbar({
			activeClass: 'akr_active', // Class to be added to highlight nav elements
			sectionSelector: 'scrollto', // Class of the section that is interconnected with nav links
			animDuration: 400, // Duration of jQuery animation as well as jQuery scrolling duration
			navOffset: 0,
			startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
			easing: 'swing', // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
			animateCSS: false, // AnimateCSS effect on/off
			animateCSSRepeat: false, // Repeat animation everytime user scrolls
			cssAnimation: 'fadeInDown', // AnimateCSS class that will be added to selector
			jqueryEffects: false, // jQuery animation on/off
			jqueryAnim: 'slideDown', // jQuery animation type: fadeIn, show or slideDown
			selector: 'li', // Selector to which activeClass will be added, either 'a' or 'li'
			mobile: false, // If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth
			mobileWidth: 480, // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)
			zindex: 9, // The zindex value to apply to the element: default 9999, other option is 'auto'
			stickyModeClass: 'sticky', // Class that will be applied to 'this' in sticky mode
			unstickyModeClass: 'unsticky' // Class that will be applied to 'this' in non-sticky mode
	  });
	});
 /*---------------------
    price slider
--------------------- */  
	
    $( "#slider-range" ).slider({
        range: true,
        min: 50000,
        max: 2000000,
        values: [ 50000, 2000000 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " đ" + " - "+ ui.values[ 1 ] + " đ" );
        $('input[name="first_price"]').val( ui.values[0] + " đ");
        $('input[name="last_price"]').val( ui.values[1] + " đ");
    },
    });
    $( "#amount" ).val( " đ" + $( "#slider-range" ).slider( "values", 0 ) +
    " - "+"đ" + $( "#slider-range" ).slider( "values", 1 ) );
    $('input[name="first_price"]').val( $( "#slider-range" ).slider( "values", 0 ) + " đ");
    $('input[name="last_price"]').val( $( "#slider-range" ).slider( "values", 1 ) + " đ");

/*js fancybox*/
$('[data-fancybox]').fancybox({
  // Options will go here
  slideShow: false,
  fullScreen: false,
  thumbs : {
        autoStart : true,
    },
   afterShow :function() {
     $('.fancybox-button--zoom').click();
  }  ,
  youtube : {
        controls : 0,
        showinfo : 0
    }
});
/*js flahsale*/
$('.timer').startTimer({
		  loop:false,
		  loopInterval: 1,

		});
		
		