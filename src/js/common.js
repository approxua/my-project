'use strict';

$(document).ready(function(){
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
        dots: true
    });
});


