$(function () {

    /*SWIPER*/
    var mainSwiper = new Swiper('.main__swiper', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 65,
        navigation: {
            nextEl: '.main__next',
            prevEl: '.main__prev',
        },
    });
    /*END SWIPER*/


    /*OTHER*/
    $('.jsMenu').on('click', function (e) {
        e.preventDefault();

        $('.hmenu').toggleClass('active');
    });

    $('.jsCallorder').on('click', function (e) {
        e.preventDefault();

        $('.callorder').toggleClass('active');
    });
    /*END OTHER*/
});