var date = moment().format("ddd MMM Do, YYYY");
var rootEl = $('#root');
var tasks = [''];
var saveBtnEl = $('.saveBtn')
var calendarHour = 09;
var tasklist = '';
$('#currentDay').text(date);

checkTime()
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

function checkTime() {
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
}




// this uses an array to save all 9 task boxes
saveBtnEl.on("click", function (event) {
    event.preventDefault();
    for (i = 0; i < 9; i++) {
        tasks[i] = rootEl.children('ul').eq(i).children(1).eq(1).val();
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)
});


function loadTasks() {
    var tasklist = JSON.parse(localStorage.getItem("tasks"));
    for (i = 0; i < 9; i++) {
        rootEl.children('ul').eq(i).children(1).eq(1).val(tasklist[i])
    }
}

if (tasklist === null) {
    console.log('write some tasks!')
} else {
    loadTasks()
}