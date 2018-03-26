$(document).ready(function(){

    $("#toggle-btn").click(function(){
        $(".menu-item-desc").toggle(function(){
            $(".menu-item-desc").animate({
                opacity:0.8
            }, 100);
        });
    });
    // $('.notification-panel > .panel').height(700);
    $("#notification-toggle").click(function(){
        $('.notification-panel').animate({display : 'block', right: '0px'}, 500);
    });

    $(".panel-heading a.panel-close").click(function(){
        $('.notification-panel').animate({display : 'none', right: '-400px'}, 500);
    });

});

$(document).ready(function () {
    $('#dataTables-example').DataTable({
        responsive: true,
        pageLength: 5,
        aLengthMenu: [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
    });
    $('#dataTables-example1').DataTable({
        responsive: true,
        pageLength: 5,
        aLengthMenu: [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
    });
    $('#dataTables-example2').DataTable({
        responsive: true,
        pageLength: 5,
        aLengthMenu: [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
    });
});
// $('.sidebar').height($("body").height());
$('#calendar-demo').dcalendar();

$(function () {
    $(".input-group-btn .dropdown-menu li a").click(function () {
        var selText = $(this).html();
        $(this).parents('.input-group-btn').find('.btn-search').html(selText);
    });
});