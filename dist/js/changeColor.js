$(document).ready(function () {
    var pageColor = localStorage.getItem('pageColor'),

        changeColor = function () {
            $('.js-color-change').click(function () {
                $('.page-wrapper').removeClass('white');
                $('.page-wrapper').removeClass('dark');

                $('.page-wrapper').addClass($(this).data('color'));

                $('.js-color-white').find('.color-changer__text').toggleClass('color-changer__text_inactive');
                $('.js-color-dark').find('.color-changer__text').toggleClass('color-changer__text_inactive');

                $('.js-color-white').find('.color-changer__icon').toggle();
                $('.js-color-dark').find('.color-changer__icon').toggle();


                localStorage.setItem('pageColor', $(this).data('color'))
            });
        }
    if (pageColor) {

        $('.page-wrapper').removeClass('white');
        $('.page-wrapper').removeClass('dark');

        $('.page-wrapper').addClass(pageColor);

        changeColor();

    } else {
        changeColor();
    }


});