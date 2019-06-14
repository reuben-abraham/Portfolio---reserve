(function ($) {
    "use strict";

    $(window).on('load', function(){

        function heightCount() {
            var poInHeight = $('.post_info_wrapper').outerHeight();
            $('.post_info_wrapper .blog_post_img .post_date_month').css({
                'height': poInHeight + 'px'
            });
        }
        heightCount();



        /*===========Portfolio isotope js===========*/
        function filTeTiSotOp() {
            var $grid = $('.filter_items_section').isotope({
              itemSelector: '.filter_single_item',
              percentPosition: true,
              masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
              }
            })

            $(".filter_menu li").on('click', function () {
                $(".filter_menu li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $grid.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 1750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            })
        }
        filTeTiSotOp();


        $('.loader-container').fadeOut(); // will first fade out the loading animation
        $('.loader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(150).css({'overflow': 'visible'})
    });

    function clients_slider(){
        var clients_slider = $('.clients-slider');
        if (clients_slider.length) {
            $('.clients-slider').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 2000,
                arrows: false,
                dots: false,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 4
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2
                      }
                    }
                  ]
            });
        }
    }
    clients_slider();

            
    /*---------LIGHT-BOX js-----------*/

    function lightBoxImages() {

        var selectorG = '.lightbox';
        if($(selectorG).length){
            var instanceG = $(selectorG).imageLightbox({
                quitOnDocClick:	false,
                button:         true,
                activity:       true,
                overlay:        true,
                arrows:         true,
                preloadNext:    true,
            });		
        }
    }

    lightBoxImages();
        
  



        /*=========== onFocusInput js===========*/
        function onFocusInput(){
            $(".search-field").on("focus", function(){
                $(this).parent().addClass('active');
            });
            $(".search-field").on("blur", function(){
                $(this).parent().removeClass('active');
            });
        }
        onFocusInput();

    /*
     =======================================================================
     Page nav
     =======================================================================
     */
    /*
     * ----------------------------------------------------------------------------------------
     *  PROGRESS BAR JS
     * ----------------------------------------------------------------------------------------
     /*---------------------------------------
     SKILLS PROGRESS BAR
     ---------------------------------------*/
    try {
        jQuery('#bt-ourskill').appear(function () {
            jQuery('.bt-skillholder').each(function () {
                jQuery(this).find('.bt-skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2500);
            });
        });
    } catch (err) {
    }
    /*---------------------------------------
     SKILLS PROGRESS BAR
     ---------------------------------------*/
    function adddingPlaceholders(){
        $('.comment-form textarea#comment').attr('placeholder', 'Comment');
        $('.comment-form input#author').attr('placeholder', 'Name');
        $('.comment-form input#email').attr('placeholder', 'Email');
    }
    adddingPlaceholders();

    /*===========Portfolio isotope js===========*/
    function portfolioMasonry() {
        var portfolio = $("#portfolio-grid");
        if (portfolio.length) {
            portfolio.imagesLoaded(function () {
                // images have loaded
                // Activate isotope in container
                portfolio.isotope({
                    itemSelector: ".portfolio-item",
                    layoutMode: 'masonry',
                    transformsEnabled: true,
                    transitionDuration: "700ms",
                });

                // Add isotope click function
                $("#filter li").on('click', function () {
                    $("#filter li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr("data-filter");
                    portfolio.isotope({
                        filter: selector,
                        animationOptions: {
                            animationDuration: 750,
                            easing: 'linear',
                            queue: false
                        }
                    })
                    return false;
                })
            })
        }
    }
    portfolioMasonry();

    /*===========Start testimonialdslider js ===========*/
    function testimonialdslider() {
        var testimonial_carousel = $(".testimonial-carousel");
        if (testimonial_carousel.length) {
            testimonial_carousel.owlCarousel({
                loop: true,
                margin: 30,
                items: 1,
                thumbs: false,
                nav: false,
                autoplay: true,
                smartSpeed: 1000,
                dotsSpeed: 600,
            })
        }
    }
    testimonialdslider();
    /*===========End testimonialdslider js ===========*/

    /*===========Start blogCarousel js ===========*/
    function blogCarousel() {
        var blog_carousel = $(".blog-carousel");
        if (blog_carousel.length) {
            blog_carousel.owlCarousel({
                loop: true,
                margin: 30,
                items: 2,
                nav: false,
                autoplay: true,
                smartSpeed: 1000,
                dotsSpeed: 600,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    650: {
                        items: 2,
                    }
                }
            })
        }
    }
    blogCarousel();
    /*===========End blogCarousel js ===========*/


    /*===========Start blog-carousel2 js ===========*/
    function blog_2Carousel() {
        var blog_carousels = $(".blog-carousel2");
        if (blog_carousels.length) {
            blog_carousels.owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1000,
                dotsSpeed: 600,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    650: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            })
        }
    }
    blog_2Carousel();
    /*===========End blogCarousel2 js ===========*/

    /*===========Start testimonialdslider js ===========*/
    function servicesSlider() {
        var clients_slider = $(".services-slider");
        if (clients_slider.length) {
            clients_slider.owlCarousel({
                loop: true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 2000,
                dotsSpeed: 600,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                    500: {
                        items: 2,
                        margin: 10,
                    },
                    992: {
                        items: 3
                    }
                },
            });
        }
    }
    servicesSlider();
    /*===========End testimonialdslider js ===========*/

    /*===========Start Counter js ===========*/
    function counting_data() {
        var counter = $(".counter");
        if (counter.length) {
            counter.counterUp({
                delay: 10,
                time: 2000
            });
        }
    }
    counting_data();
    /*===========End Counter js ===========*/


    /*============= scrool js  ==============*/
    function scroolEffect() {
        if ($(".wrapper").length) {
            $('#fullpage').fullpage({
                sectionSelector: '.op-section',
                navigation: true,
                slidesNavigation: true,
                controlArrows: false,
                scrollOverflow: true
            });
        }
    }
    scroolEffect();


    // full screen side nav
    $(".burger-icon,#open-button").on('click', function () {
        $('.canvas-menu,.left_offcanvas_menu,.offcanvas_closer').toggleClass("mySideBar");
        $(this).toggleClass("actives");
    });
    $(".canvas-menu ul >li a,.close,.offcanvas_closer").on('click', function () {
        $('.canvas-menu,.left_offcanvas_menu,.offcanvas_closer').removeClass("mySideBar");
        $('.close,#open-button').removeClass("actives");
    });

    /*==========  Header  ==========*/
    $('#nav>li').each(function (index) {
        index = (index + 2) * .1;
        index = index + 's';
        $(this).css('animation-delay', index);
    });

    new WOW().init();

})(jQuery);