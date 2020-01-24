const compareDate = new Date(2020,2,18,0,0,0,0); // Time of countdown
const timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    const dateEntered = toDate;
    const now = new Date();
    const difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(timer);

    } else {
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        ruAdaptation(seconds, minutes, hours, days);

        if (days !== 0) {
            $("#days-segment").text(days);
        }
        if (hours !== 0) {
            $("#hours-segment").text(hours);
        }
        if (minutes !== 0) {
            $("#minutes-segment").text(minutes);
        }
        if (seconds !== 0) {
            $("#seconds-segment").text(seconds);
        }
    }
}

function ruAdaptation(seconds, minutes, hours, days) {
    let secondsLastSymbol = Number(seconds.toString().slice(-1));
    let minutesLastSymbol = Number(minutes.toString().slice(-1));
    let hoursLastSymbol = Number(hours.toString().slice(-1));
    let daysLastSymbol = Number(days.toString().slice(-1));

    if (seconds === 0) {
        document.getElementById("seconds-title").hidden;
    } else if (secondsLastSymbol === 1) {
        document.getElementById("seconds-title").innerHTML = "секунда";
    } else if ((secondsLastSymbol > 1) && (secondsLastSymbol <= 4)) {
        document.getElementById("seconds-title").innerHTML = "секунды";
    } else {
        document.getElementById("seconds-title").innerHTML = "секунд";
    }

    if (minutes === 0) {
        document.getElementById("minutes-title").hidden;
    } else if (minutesLastSymbol === 1) {
        document.getElementById("minutes-title").innerHTML = "минута";
    } else if ((minutesLastSymbol > 1) && (minutesLastSymbol <= 4)) {
        document.getElementById("minutes-title").innerHTML = "минуты";
    } else {
        document.getElementById("minutes-title").innerHTML = "минут";
    }

    if (hours === 0) {
        document.getElementById("hours-title").hidden;
    } else if (hoursLastSymbol === 1) {
        document.getElementById("hours-title").innerHTML = "час";
    } else if ((hoursLastSymbol > 1) && (hoursLastSymbol <= 4)) {
        document.getElementById("hours-title").innerHTML = "часа";
    } else {
        document.getElementById("hours-title").innerHTML = "часов";
    }

    if (days === 0) {
        document.getElementById("days-title").hidden;
    } else if (daysLastSymbol === 1) {
        document.getElementById("days-title").innerHTML = "день";
    } else if ((daysLastSymbol > 1) && (daysLastSymbol <= 4)) {
        document.getElementById("days-title").innerHTML = "дня";
    } else {
        document.getElementById("days-title").innerHTML = "дней";
    }
}
