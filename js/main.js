$(function () {

    /*SWIPER*/

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        speed: 500,
        mousewheel: true,
        keyboard: {
            enabled: true,
        }
    });

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

    $('body').on('change', '.accept__check', function () {

        var check = $(this),
            checked = check.prop('checked'),
            form = check.closest('form'),
            button = form.find('[type=submit]');

        if (checked) {
            button.removeClass('disabled');
        } else {
            button.addClass('disabled');
        }

    });

    $('body').on('click', function (e) {

        var item = $(e.target);

        if (item.closest('.hmenu').length == 0 && item.closest('.jsMenu').length == 0) {
            $('.hmenu').removeClass('active');
        }

        if (item.closest('.callorder').length == 0 && item.closest('.jsCallorder').length == 0) {
            $('.callorder').removeClass('active');
        }



    });

    // $('.catalog__item').on('mouseover', function (e) {
    //     $(this).animate({
    //         width: '27%'
    //     }, 500);
    // });
    /*END OTHER*/
});