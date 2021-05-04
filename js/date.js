var first = new Date("03-26-2020");
var second = new Date("04-02-2020");
var diff = (second - first) / 86400000;
document.getElementById("delivery_time").innerHTML = diff;
