$(function () {
    var count = 0;
    var $next_page = $('#second').offset().top;
    console.log($next_page);

    $('.click_bottom').click(function (e) {
        count++;
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        console.log(count);
    });

    $('.click_top').click(function (e) {
        count--;
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        console.log(count);
    });

});