$(document).ready(function () {

    /* Sticky Navigation */
    $(".js--features-section").waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass("sticky");
        } else if (direction == 'up') {
            $('nav').removeClass("sticky");
        }
    }, {
        offset: '60px;'
    });

    /* Scrolling Buttons */

    $(".js--scroll-to-plan").click(function () {
        $('html,body').animate({
            scrollTop: $('.js--plan-section').offset().top
        }, 1000);
    })

    $(".js--scroll-to-start").click(function () {
        $('html,body').animate({
            scrollTop: $('.js--features-section').offset().top
        }, 1000);
    })


    /* Smooth Scrolling */

    
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { 
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); 
                            $target.focus(); 
                        };
                    });
                }
            }
        });

    
    
    /* Animatin on Scroll */
    
    
    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animated fadeIn");
    },{
        offset: '60%'                       
    });
    
    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animated fadeInUp");
    },{
        offset: '60%'                       
    });
    
    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animated fadeIn");
    },{
        offset: '60%'                       
    });
    
    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animated pulse");
    },{
        offset: '60%'                       
    });
    
    

    
    

});
