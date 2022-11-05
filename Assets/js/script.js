var date = moment().format("ddd MMM Do, YYYY");
var rootEl = $('#root');
$('#currentDay').text(date);

setInterval(function () {
    var time = moment().format('h:mm:ssa');
    $('#currentTime').text(time);
}, 1000);

function isPast(time) {
    const today = moment().format('H');
    return time < today;
}

function isFuture(time) {
    const today = moment().format('H')
    return time > today;
}

var calendarHour = 09;


for (i = 0; i < 9; i++) {
  
    if (isPast(calendarHour) === true) {
        rootEl.children('ul').eq(i).children().eq(1).addClass('past');
    } else if (isFuture(calendarHour) === true) {
        rootEl.children('ul').eq(i).children().eq(1).addClass('future');
    } else if (calendarHour == moment().format('H')) {
        rootEl.children('ul').eq(i).children().eq(1).addClass('present');
    }
    calendarHour++
}