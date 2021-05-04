document.getElementById("education_level").onchange = function () {
  var select = document.getElementById("education_level");
  var selectvalue = select.options[select.options.selectedIndex];
  document.getElementById("selected_level").innerHTML = selectvalue.innerHTML;
};

var check = document.getElementsByName("meal");

for (var a = 0; a < check.length; a++) {
  check[a].onchange = function () {
    document.getElementById("selected_check").innerHTML = "<ul>";

    for (var b = 0; b < check.length; b++) {
      if (check[b].checked) {
        document.getElementById("selected_check").innerHTML +=
          "<li>" + check[b].value + "</li>";
      }
    }

    document.getElementById("selected_check").innerHTML += "</ul>";
  };
}
