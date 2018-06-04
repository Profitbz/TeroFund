$(document).ready(function () {
    var pageColor = localStorage.getItem('pageColor'),

        changeColor = function () {
            $('.js-color-change').click(function () {
                $('.page-wrapper').removeClass('white');
                $('.page-wrapper').removeClass('dark');

                $('.page-wrapper').addClass($(this).data('color'));

                localStorage.setItem('pageColor', $(this).data('color'))
            });
        };

    if (pageColor) {

        $('.page-wrapper').removeClass('white');
        $('.page-wrapper').removeClass('dark');

        $('.page-wrapper').addClass(pageColor);

        changeColor();

    } else {
        changeColor();
    }


});