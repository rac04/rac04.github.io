$(function () {
    var count = 0;
    var scrollValue = $('html, body').offset().top;
    var $next_page = $('#second').offset().top;
    var $page_length = $('.inner_wrapper li').length;

    $('.click_bottom').click(function (e) {
        if(count<$page_length){
            count++;
        }
        
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
    });

    $('.click_top').click(function (e) {
        if(count>0){
            count--;
        }
        
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop()==$next_page){
            $('#second > .default').animate({
                opacity:1
            })
        }
    });
    
    $('.star').hover(function(){
        $(this).prev().css({opacity:1})
    },function(){
        $(this).prev().css({opacity:0})
    });
    var num = $('header').outerHeight();
    var thirdThre = $('#third').offset().top;
    console.log(thirdThre - num);
    $(window).scroll(function(){
        console.log('현재값'+$(this).scrollTop());
        if($(this).scrollTop()>=thirdThre-num){
            $('#third .default').transition({
                "scale" : "1"
            },600)
        }

    })
}); 