var date = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(date);



setInterval(function () {
    var time = moment().format("hh:mm:ss");
    $('#currentTime').text(time);
}, 1000);
