let section1 = document.getElementById("screen1");
let section2 = document.getElementById("screen2");
let dateValue, date, today, difference, day, hours, minutes, seconds, interval;

function initiate() {
  let _ = document.getElementById("date").value;
  let __ = _.split("/");

  dateValue = `${__[2]}-${__[1]}-${__[0]}`;

  section1.style.display = "none";
  section2.style.display = "";

  date = new Date(dateValue);
  today = new Date();
  difference = new Date(date - today);
  day = difference.getDate();
  hours = difference.getHours();
  minutes = difference.getMinutes();
  seconds = difference.getSeconds();

  interval = setInterval(() => {
    parseInt(seconds);
    parseInt(minutes);
    parseInt(hours);
    parseInt(day);
    if (seconds <= 0) {
      minutes--;
      seconds = 60;
    }
    if (minutes <= 0) {
      hours--;
      minutes = 60;
    }
    if (hours <= 0) {
      day--;
      hours = 24;
    }
    if (day <= 0) {
      window.alert("Date Reached!");
      clearInterval(interval);
    }

    seconds--;

    document.getElementById("day").innerText = day < 10 ? `0${day}` : `${day}`;
    document.getElementById("hour").innerText =
      hours < 10 ? `0${hours}` : `${hours}`;
    document.getElementById("minute").innerText =
      minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.getElementById("second").innerText =
      seconds < 10 ? `0${seconds}` : `${seconds}`;
  }, 1000);
}

function reiniciar() {
  clearInterval(interval);
  document.getElementById("date").innerText = "";
  section1.style.display = "";
  section2.style.display = "none";
}
