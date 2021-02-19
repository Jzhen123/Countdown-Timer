

setInterval(calculateTimeLeft, 100);

function calculateTimeLeft() {

    var currentDate = new Date();
    var endDate = Date.prototype.getTime("April 9, 2021 00:00:00")

    timeLeft = endDate - currentDate;

    var seconds = timeLeft * 1000;
    






}

