window.onscroll = function(){ 
    var scroll = window.pageYOffset,
    speed1 = 5,
    bgPos = document.getElementsByClassName('background')[0].offsetTop,
    bgEq = (bgPos - (bgPos + (scroll/speed1)));

    if(scroll > 0){
        document.getElementsByTagName('header')[0].classList.add('headerblur')
    }else{
        document.getElementsByTagName('header')[0].classList.remove('headerblur')
    }

    document.querySelector(".background").style.transform = "translate( 0, " + bgEq + "px)" 

}

/*
$(window).scroll(function(){ 
    var scroll = $(window).scrollTop(),
    speed1 = 6,
    bgPos = $('.background').position().top,
    bgEq = (bgPos - (bgPos + (scroll/speed1)));

    if(scroll > 0){
        $('header').addClass('headerblur')
    }else{
        $('header').removeClass('headerblur')
    }

    $(".background").css({transform: "translate( 0, " + bgEq + "px)"})  

})*/