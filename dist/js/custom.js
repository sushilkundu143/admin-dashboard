$(document).ready(function () {

    $("#toggle-btn").click(function () {
        $(".menu-item-desc").toggle(function () {
            $(".menu-item-desc").animate({
                opacity: 0.8
            }, 100);
        });
    });
    // $('.notification-panel > .panel').height(700);
    $("#notification-toggle").click(function () {
        $('.notification-panel').animate({
            display: 'block',
            right: '0px'
        }, 500);
    });

    $(".panel-heading a.panel-close").click(function () {
        $('.notification-panel').animate({
            display: 'none',
            right: '-400px'
        }, 500);
    });

});

$(document).ready(function () {
    $('#dataTables-example').DataTable({
        responsive: true,
        pageLength: 5,
        aLengthMenu: [
            [5, 10, 25, 50, 75, -1],
            [5, 10, 25, 50, 75, "All"]
        ]
    });
    $('#dataTables-example1').DataTable({
        responsive: true,
        pageLength: 5,
        aLengthMenu: [
            [5, 10, 25, 50, 75, -1],
            [5, 10, 25, 50, 75, "All"]
        ]
    });
    $('#dataTables-example2').DataTable({
        responsive: true,
        pageLength: 5,
        aLengthMenu: [
            [5, 10, 25, 50, 75, -1],
            [5, 10, 25, 50, 75, "All"]
        ]
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

var table = $('#dataTables-example').DataTable();

// #myInput is a <input type="text"> element
$('#myInputTextField').on('keyup change', function () {
    table.search(this.value).draw();
});
/*
oTable = $('#myTable').DataTable();   
$('#myInputTextField').keyup(function(){
      oTable.search($(this).val()).draw() ;
})
*/
// calendar data match functionality
let dataMatches = $('.table.event-table > tbody > tr');
let dates = ((dataMatches) => {
    let result = [];
    for (current of dataMatches) {
        let d = $(current).attr("data-date");
        d = new Date(d).toISOString().substring(0, 10);
        result.push(d);
    }
    return result;
});
let myDa = dates(dataMatches);

$('table#calendar-demo td>span').click(function () {
    let myResult;
    let eventUpdateDate = $('#event-updates').find('div.date');
    let eventUpdateContent = $('#event-updates').find('div.content');
    let dateD = $(this).text();
    let monthD = $('#currM').text();
    let d = new Date(dateD + monthD),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (myDa.indexOf(`${year}-${month}-${day}`) > -1) {
        let dataDate = $(`table.event-table`).find(`tr[data-date="${year}-${month}-${day}"] > td.event-desc span.date-data`).text();
        let dataDesc = $('table.event-table').find(`tr[data-date="${year}-${month}-${day}"] > td.event-desc span.date-content`).text();
        eventUpdateDate.text(dataDate);
        eventUpdateContent.text(dataDesc);
    } else {
        myResult = false;
    }
    return myResult;
});