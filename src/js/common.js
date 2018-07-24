'use strict';

$(function () {
    $('.header-slider').slick({
        infinite: true,
        prevArrow: '<i class="icon-left-open arrow">',
        nextArrow: '<i class="icon-right-open arrow">'
    });
    $('.serv-slider').slick({
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'serv-dots'
    });
    $('.case-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'case-dots'
    });
    var a = 0;
    $(window).scroll(function () {

        var oTop = $('.awards-wrapper').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() >= oTop) {
            $('#user').animateNumber({
                    number: 3891
                },
                1000
            );
            $('#posts').animateNumber({
                    number: 281
                },
                1000
            );
            $('#total').animateNumber({
                    number: 618
                },
                1000
            );
            $('#campings').animateNumber({
                    number: 178
                },
                1000
            );
            $('#features').animateNumber({
                number: 285
                },
                1000
            );
            a = 1;
        }

    });
});


