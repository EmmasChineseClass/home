/*select element: $()*/

$(document).ready(function() {

    /* ---- for the sticky navigation ---- */
    /* Select section-features section */
    $('.js-section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    
    /* ---- scroll on buttons ---- */
    $('.js-scroll-to-plan').click(function (){
        $('html,body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
    });
    
    $('.js-scroll-to-start').click(function (){
        $('html,body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
    });
    
    /* ---- Navigation scroll ---- */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
                }
            }
        });
    });
    
    /* ---- animation in section ---- */
    $('.js-wp-1').waypoint(function(direction){
        $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '80%'  // reference top of div 
    });
    
    $('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js-wp-4').waypoint(function(direction){
    $('.js-wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });
    
    /* ---- reset all animation ---- */
    $('.js-header').waypoint(function(direction){
        if (direction === 'up') {
            $('.js-wp-1').removeClass('animate__animated animate__fadeIn');
        }
    }, {
        offset: '-50%'
    });
    
     $('.js-header').waypoint(function(direction){
        if (direction === 'up') {
            $('.js-wp-2').removeClass('animate__animated animate__fadeInLeft');
        }
    }, {
        offset: '-50%'
    });
    
     $('.js-header').waypoint(function(direction){
        if (direction === 'up') {
            $('.js-wp-3').removeClass('animate__animated animate__fadeInUp');
        }
    }, {
        offset: '-50%'
    });
    
     $('.js-header').waypoint(function(direction){
        if (direction === 'up') {
            $('.js-wp-4').removeClass('animate__animated animate__pulse');
        }
    }, {
        offset: '-50%'
    });
    
    
    /*mobile nav pop-up*/
    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        //jQurey method
        nav.slideToggle(200);  //in millisecond
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }  
    });
    
    
    
    
    
    
    
    
});
