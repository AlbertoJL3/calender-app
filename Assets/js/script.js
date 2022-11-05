var date = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(date);

setInterval(function () {
    var time = moment().format('LT');
    $('#currentTime').text(time);
}, 1000);

