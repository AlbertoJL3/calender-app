var date = moment().format("ddd MMM Do, YYYY");
var rootEl = $('#root');
var tasks = [''];


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


//you could use moment(9:00AM).format(H) and do that for all the hours in the time block and then keep the same basic structure. 
var calendarHour = 09;

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


checkTime()

console.log(rootEl.children('ul').eq(0).children(1).eq(1).textContent)

function saveTasks() {
   
}





rootEl.on("click", function (event) {
    
    event.preventDefault();
    for (i = 0; i < 9; i++) {
        tasks[i] = rootEl.children('ul').eq(i).children(1).eq(1).val();
    }
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks)

});