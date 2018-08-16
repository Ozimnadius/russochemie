$(function () {

    /*SWIPER*/

    var swiper = new Swiper('.swiper__container', {
        direction: 'horizontal',
        speed: 500,
        mousewheel: true,
        hashNavigation: {
            watchState: true,
        },
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

    $('.jsProductsMore').on('click', function (e) {

        var productsButton = $(this),
            productsMore = $('.jsProductsListMore'),
            productsMoreButton = $('.jsProductsLess');

        productsButton.removeClass('active');
        setTimeout(function () {
            productsMore.slideDown(500, function () {
                productsMoreButton.addClass('active')
            });
        }, 300);

    });

    $('.jsProductsLess').on('click', function (e) {

        var productsMoreButton = $(this),
            productsMore = $('.jsProductsListMore'),
            productsButton = $('.jsProductsMore');

        productsMoreButton.removeClass('active');
        setTimeout(function () {
            productsMore.slideUp(500, function () {
                productsButton.addClass('active')
            });
        }, 300);

    });

    var productsHeight = $('.products__list').innerHeight() - 110;

    $('.products__list2').css({
        height: productsHeight
    });

    $('.app__more').on('click', function (e) {
        var button = $(this),
            buttonText = button.find('.app__more-text'),
            text = 'Показать все категории',
            hidden = $('.app__list-hidden');

        if (!button.hasClass('open')) {
            text = 'Скрыть категории';
        }
        button.toggleClass('open');
        hidden.slideToggle(300);
        buttonText.text(text);

    });

    $('.vacancy__more').on('click', function (e) {
        var button = $(this),
            vacancy = button.closest('.vacancy'),
            hidden = vacancy.find('.vacancy__hidden');

        button.toggleClass('open');
        hidden.slideToggle(500);
    });

    function setHeightNews () {
        var maxHeight = 0;

        $('.news__title').each(function (indx, elem) {
            var item = $(elem),
                height = item.outerHeight();
            if (maxHeight < outerHeight) {
                maxHeight = height;
            }
        });

        $('.news__title').outerHeight(maxHeight);
    }
    setHeightNews();

    $('.review__button').on('click', function () {
        var button = $(this),
            review = button.closest('.review'),
            link = review.find('.review__img-link');

        link.trigger('click');
    });

    $('.faces__item').on('click', function (e) {
        var item = $(this),
            items = $('.faces__item');

        items.removeClass('active');
        item.addClass('active');
    });

    setFacesHeight();
    function setFacesHeight() {
        var facesHeight = 0;
        $('.faces__item').each(function (indx, elem) {
            var item = $(elem),
                bottom = item.find('.faces__item-bottom'),
                height = bottom.outerHeight();

            if (facesHeight < height) {
                facesHeight = height;
            }

        });

        facesHeight+=30;

        $('.faces__fake').height(facesHeight);
    }

    /*END OTHER*/
});