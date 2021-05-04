//Question 1
function cel_to_fah(cel) {
  let fah = (9 * cel) / 5 + 32;
  return fah;
}
document.getElementById("fahr_1").innerHTML = cel_to_fah(38);
document.getElementById("fahr_2").innerHTML = cel_to_fah(24);
document.getElementById("fahr_3").innerHTML = cel_to_fah(-1);

//Question 2
var classification = [
  "John Hill",
  "Mary Jane",
  "Gary Vee",
  "Paricia Mills",
  "Helen Hall",
  "Paul Green",
];
document.getElementById("best_students").innerHTML = classification.slice(-3);

//Question 3
var course = {
  title: "Learn to Code in Python 3",
  categories: ["programming", "technology", "python"],
  "5_stars_reviews": 420,
  "4_stars_reviews": 80,
  "3_stars_reviews": 33,
  "2_stars_reviews": 20,
  "1_stars_reviews": 4,
};
document.getElementById("course_title").innerHTML = course.title;
document.getElementById("main_category").innerHTML = course.categories[0];
fiveStars = course["5_stars_reviews"];
starsSum =
  fiveStars +
  course["4_stars_reviews"] +
  course["3_stars_reviews"] +
  course["2_stars_reviews"] +
  course["1_stars_reviews"];

finalRating = (fiveStars * 100) / starsSum;
document.getElementById("reviews_5_stars").innerHTML = Math.ceil(finalRating);

//Question 4
var shoppingList = [
  "Milk",
  "Butter",
  "Juice",
  "Bread",
  "Beer",
  "Rice",
  "Potatoes",
  "Chocolate",
];
//shoppingList.unshift(shoppingList[shoppingList.length - 1]);
shoppingList.unshift(shoppingList.pop());
shoppingList.push("Cheese", "Eggs");
console.log(shoppingList);
