$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }
    });

    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        let target = $($.attr(this, 'href'));
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });

    $('.menu-items li:nth-child(3) a').click(function (event) {
        event.preventDefault();
        let target = $('#contact-section');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });

    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});
