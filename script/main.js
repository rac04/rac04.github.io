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
    $(window).scroll(function(){
        if(count>=1 && count<=2){
            $('#gnb > li').removeClass('gnb_click');
            $('#gnb > li').eq(1).addClass('gnb_click');
        }else if(count>=3 && count<=5){
            $('#gnb > li').removeClass('gnb_click');
            $('#gnb > li').eq(2).addClass('gnb_click');
        }else if(count==6){
            $('#gnb > li').removeClass('gnb_click');
            $('#gnb > li').eq(3).addClass('gnb_click');
        }else if(count==0){
            $('#gnb > li').removeClass('gnb_click');
            $('#gnb > li').eq(0).addClass('gnb_click');
        }
    });

        $('#gnb > li').eq(0).click(function(){
            count=0;
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        })
        $('#gnb > li').eq(1).click(function(){
            count=1;
        console.log(count);
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        })
        $('#gnb > li').eq(2).click(function(){
            count=3;
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        })
        $('#gnb > li').eq(3).click(function(){
            count=6;
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        })

}); 