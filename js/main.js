var currentDate = new Date();
var endDate = new Date("Apr 9, 2021 00:00:00").getTime();
var countdownDays = document.querySelector('.countdownDays');
var countdownHours = document.querySelector('.countdownHours');
var countdownMinutes = document.querySelector('.countdownMinutes');
var countdownSeconds = document.querySelector('.countdownSeconds');


setInterval(calculateTimeLeft, 1000);

function calculateTimeLeft() {

    timeLeft = endDate - currentDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours + " Hours";
    countdownMinutes.innerHTML = minutes + " Minutes";
    countdownSeconds.innerHTML = seconds + " Seconds";

    if (timeLeft < 0) {
        document.getElementById("countdownDays").innerHTML = "";
        document.getElementById("countdownHours").innerHTML = "";
        document.getElementById("countdownMinutes").innerHTML = "";
        document.getElementById("countdownSecond").innerHTML = "";
        document.getElementById("happyBday").innerHTML = "HAPPY BIRTHDAY!!!";
    }
}
calculateTimeLeft();
