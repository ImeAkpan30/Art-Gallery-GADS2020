$(function () {
    // $(window).on("load resize", function () {
    //     $(".fill-screen").css("height", window.innerHeight);
    // });

    // Bootstrap scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    //smooth scrolling
    $('nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // parallax scrolling with stellar.js
    $(window).stellar();
    
    // initialize WOW for element animation
    // new WOW().init();

    
});