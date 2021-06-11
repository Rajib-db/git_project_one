(function ($) {
    'use strict';

    /*Data Backgrond*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    /*testi-carousel*/
    $('.testimonial-active').owlCarousel({
        items: 2,
        loop: true,
        stagePadding: 0,
        margin: 0,
        nav: true,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });

})(jQuery)