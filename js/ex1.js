//Question 1
console.log("This is ex1.js");

//Question 2
let firstName = "Yadukrishnan";
let lastName = "Nair";
let yob = 1998;
yob = 2021 - 1998;
document.getElementById("student_message").innerHTML =
  "Hi, my name is " +
  firstName +
  " " +
  lastName +
  ", I'm " +
  yob +
  " years old and I'm learning Javascript";

//Question 3
let num1 = parseInt(document.getElementById("num_1").innerHTML);
let num2 = parseInt(document.getElementById("num_2").innerHTML);
let num3 = num1 / num2;
document.getElementById("result").innerHTML = num3.toFixed(2);

//Question 4
var phone = 876543123;
phone = phone.toString();
if (phone.length == 9) {
  console.log("Valid");
} else {
  console.log("Not Valid");
}

//Question 5
console.log(Math.pow(32, 6));

//Question 8
var url1 = document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = "https://" + url1;
var url2 = document.getElementById("url_3").innerHTML;
document.getElementById("url_4").innerHTML = url2.replace("https://", "");
