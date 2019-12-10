function showNav(){
    let curItem = 0;
    $('.burger-line').addClass('burger_open');
    $('.navigation').addClass('navigation_active');
    $('body').css({'overflow':'hidden'});
    $('.navigation-menu__item').css({'font-size':'24px', 'color':'white'});
    $('.burger').css({'border-color':'white'});
    if (getBodyScrollTop()/$(window).height()>=0.5 && getBodyScrollTop()/$(window).height()<1.5){
        $('.navigation-menu__item:nth-child(1)').css({'font-size':'29px', 'color':'tomato'});
        curItem = 0;
    }
    if (getBodyScrollTop()/$(window).height()>=1.5){
        $('.navigation-menu__item:nth-child(2)').css({'font-size':'29px', 'color':'tomato'});
        curItem = 1;
    }
    for (let i = 0; i < 6; i++) {
        $('.navigation-menu__item').eq(i).hover(function(event){
            if(i != curItem){
                console.log('no tomato');
                $('.navigation-menu__item').eq(i).toggleClass('navigation-menu__item_hover');
            }
        });
    }
}
function hideNav(){
    $('.burger-line').removeClass('burger_open');
    $('.navigation').removeClass('navigation_active');
    $('body').css({'overflow':'visible'});
    $('.burger').css({'border-color':'transparent'});
}
function getBodyScrollTop(){
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
function getWidthPercent(){
    return getBodyScrollTop() / ( $(document).height() - $(window).height() );
}
$('.burger').click(function(event){
    event.stopPropagation();
    if(!$('.navigation').hasClass('navigation_active')) {
          showNav();
    }
    else {
          hideNav();
    }
});
$('.navigation').click(function(event) {
    event.stopPropagation();
});
$('.navigation-menu__item').click(hideNav);
$('.navigation-social__item').click(hideNav);