$(function () {
    $('html').click(function () {
        $('.tools').fadeOut(300);
        $('.notification').fadeOut(300);
        $('.profile').fadeOut(100);
    });
    $('.icon').click(function (event) {
        event.stopPropagation();
    });

    $('.icon i:first').click(function () {
        $('.tools').fadeIn(500).css('display', 'flex');
    });
    $('.icon i:first').siblings().click(function () {
        $('.tools').fadeOut(100);
    });

    $('.icon i:nth-child(2)').click(function () {
        $('.notification').fadeIn(500);
    });
    $('.icon i:nth-child(2)').siblings().click(function () {
        $('.notification').fadeOut(100);
    });

    $('.icon span').click(function () {
        $('.profile').fadeIn(500);
    })
    $('.icon span').siblings().click(function () {
        $('.profile').fadeOut(100);
    })

    $('.mc').click(function () {
        $('.mic').fadeIn(200).css('display', 'flex');
    })

    $('.na').click(function () {
        $('.mic').fadeOut(100);
    })

})