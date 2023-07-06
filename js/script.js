$(document).ready(function(){

    $("html, body").animate({ scrollTop: 0 }, "slow");

    new WOW().init();
    //wow css cagirmaq

    $(".mg-popup").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
          },
      });

    if($(window).scrollTop() > 60){
        $("header").addClass("scrolled");
    }


    $(window).scroll(function(){
        if($(this).scrollTop() > 860 && $(this).scrollTop() < 1400){
            $("header").addClass("scrolled-services");
        }else{
            $("header").removeClass("scrolled-services");
        };
    });
    
    // $("html, body").animate({scrollTop:0},"slow");

    $(".main-menu nav-link").click(function(e){
        e.preventDefault();
        let elem = $($(this).attr("href"));
        $("html, body").animate({ scrollTop: elem.offset().top - 60},"slow");
    });

    $("body").scrollspy({
        target: "#navbarNav",
        offset: 0
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>60){
            $("header").addClass("scrolled");
        }else{
            $("header").removeClass("scrolled");
        }
    })
});