//Question 1
function cel_to_fah(cel) {
  let fah = (9 * cel) / 5 + 32;
  return fah;
}
document.getElementById("convert").onclick = function () {
  cel = document.getElementById("temp_celsius").value;
  if (cel == "") {
    alert("Invalid Temperature");
  } else {
    document.getElementById("temp_fahr").innerHTML = cel_to_fah(cel);
  }
};

//Question 2
document.getElementById("anos_copa").innerHTML = "";
for (var year = 2022; year < 2050; year += 4) {
  document.getElementById("anos_copa").innerHTML += "<li>" + year + "</li>";
}

//Question 3
document.getElementById("calculate").onclick = function () {
  var grade1 = document.getElementById("grade1").value;
  var grade2 = document.getElementById("grade2").value;
  var avg = (grade1 + grade2) / 2;
  var absences = (document.getElementById("absences").value * 100) / 20;
  var result = document.getElementById("result");
  if (absences >= 70 && avg >= 6.5) {
    result.style.color = "green";
    result.innerHTML = "<strong>Passed!</strong>";
  } else {
    result.style.color = "red";
    if (absences < 70 && avg < 6.5) {
      result.innerHTML = "<strong>Failed! Due: Absence and Low Grade</strong>";
    } else if (absences < 70) {
      result.innerHTML = "<strong>Failed! Due: Absence</strong>";
    } else {
      result.innerHTML = "<strong>Failed! Due: Grade</strong>";
    }
  }
};

//Question 4
var sales = [
  {
    student: "Jason Gomes",
    date: "10/06/2018",
    amount: 34.99,
    refundRequested: null,
  },

  {
    student: "Carlos Blue",
    date: "10/06/2018",
    amount: 29.99,
    refundRequested: null,
  },

  {
    student: "Martin Heyes",
    date: "11/06/2018",
    amount: 39.99,
    refundRequested: "13/06/2018",
  },

  {
    student: "Isabella Hopkins",
    date: "11/06/2018",
    amount: 29.99,
    refundRequested: null,
  },

  {
    student: "Andrew Walt",
    date: "12/06/2018",
    amount: 34.99,
    refundRequested: null,
  },
];
var sum = 0;
table = document.getElementById("course_sales");
table.innerHTML = "";
for (var a = 0; a < sales.length; a++) {
  if (sales[a].refundRequested) {
    continue;
  } else {
    table.innerHTML +=
      "<td>" +
      sales[a].student +
      "</td>" +
      "<td>" +
      sales[a].date +
      "</td>" +
      "<td>" +
      sales[a].amount +
      "</td>";
    sum += sales[a].amount;
  }
}
document.getElementById("total_sold").innerHTML = sum;
