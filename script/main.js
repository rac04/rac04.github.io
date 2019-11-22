$(function () {
    var count = 0;
    var scrollValue = $('html, body').offset().top;
    var $next_page = $('#second').offset().top;
    var $page_length = $('.inner_wrapper li').length;
    console.log($page_length);
    console.log($next_page);

    $('.click_bottom').click(function (e) {
        if(count<$page_length){
            count++;
        }
        
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        console.log(count);
        console.log(scrollValue);
    });

    $('.click_top').click(function (e) {
        if(count>0){
            count--;
        }
        
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $next_page * count + 'px'
        }, 400)
        console.log(count);
        console.log(scrollValue);
    });
    
    $(window).scroll(function(){
        if($(window).scrollTop()==$next_page){
            $('#second > .default').animate({
                opacity:1
            })
        }
    });
    var starWrap = $('.star_wrap > li');
    var starWrapIdx = starWrap.index();
        $(starWrap).hover(function(){
            console.log(starWrapIdx);
            $(this).eq(starWrapIdx).attr('class','fas fa-star star');
        },function(){
            console.log(starWrapIdx);
            $(this).eq(starWrapIdx).attr('class','far fa-star star');
        });
    
}); 