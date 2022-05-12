

// nav fixed 
jQuery("document").ready(function () {
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 200) {
            jQuery('.main-menu').addClass('fixed-top');
        } else {
            jQuery('.main-menu').removeClass('fixed-top');
        }
    });
});


//banner carousel
jQuery('document').ready(function () {
    jQuery('.banner .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        smartSpeed: 2000,
        //mouseDrag:false,
        autoplay: false,
        autoplayTimeout: 4000,
        items: 1,
    });
});




//testimonial carousel
jQuery('document').ready(function () {
    jQuery('#update-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: false,
        smartSpeed: 2000,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
});



//testimonial carousel
jQuery('document').ready(function () {
    jQuery('#news-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        dots: true,
        smartSpeed: 2000,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
});

