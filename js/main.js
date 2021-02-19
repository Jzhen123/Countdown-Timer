

setInterval(calculateTimeLeft, 100);

function calculateTimeLeft() {

    var currentDate = new Date();
    var endDate = new Date("Apr 9, 2021 00:00:00").getTime();

    timeLeft = endDate - currentDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % 60) / 1000);

    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " Hours";
    document.getElementById("minutes").innerHTML = minutes + " Minutes";
    document.getElementById("seconds").innerHTML = seconds + " Seconds";

    if (timeLeft < 0) {
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
        document.getElementById("happyBday").innerHTML = "HAPPY BIRTHDAY!!!";
    }





}

