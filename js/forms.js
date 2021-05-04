document.getElementById("show_radio").onclick = function () {
  var radio = document.getElementsByName("gender");
  var radioSelected;
  for (var a = 0; a < radio.length; a++) {
    if (radio[a].checked) {
      radioSelected = radio[a];
      document.getElementById("selected_radio").innerHTML = radioSelected.value;
    }
  }
};
document.getElementById("show_option").onclick = function () {
  var select = document.getElementById("options");
  var selectvalue = select.options[select.options.selectedIndex];
  document.getElementById("selected_option").innerHTML = selectvalue.innerHTML;
};
document.getElementById("show_check").onclick = function () {
  var elements = document.getElementsByName("interest");

  document.getElementById("selected_check").innerHTML = "<ul>";
  for (var a = 0; a < elements.length; a++) {
    if (elements[a].checked) {
      document.getElementById("selected_check").innerHTML +=
        "<li>" + elements[a].value + "</li>";
    }
  }
  document.getElementById("selected_checked").innerHTML += "</ul>";
};
