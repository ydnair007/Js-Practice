function add_zero(number) {
  if (number < 10) {
    return "0" + number.toString();
  } else {
    return number.toString();
  }
}
window.setInterval(function () {
  var time = new Date();
  document.getElementById("hours").innerHTML = add_zero(time.getHours());
  document.getElementById("minutes").innerHTML = add_zero(time.getMinutes());
  document.getElementById("seconds").innerHTML = add_zero(time.getSeconds());
}, 1000);
