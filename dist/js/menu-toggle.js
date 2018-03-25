$(document).ready(function(){

    $("#toggle-btn").click(function(){
        $(".menu-item-desc").toggle(function(){
            $(".menu-item-desc").animate({
                opacity:0.8
            }, 100);
        });
    });

    $("#notification-toggle").click(function(){
        $('.notification-panel').animate(function(){
            right: '0px'
        },100).toggle();
    });

});