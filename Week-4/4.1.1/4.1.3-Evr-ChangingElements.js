// print the outer HTML of the navigation bar
document.querySelector(".nav-bar").outerHTML;
console.log(document.querySelector(".nav-bar").outerHTML);

// print the inner HTML of the navigation bar
document.querySelector(".nav-bar").innerHTML;
console.log(document.querySelector(".nav-bar").innerHTML);

// print the text content of the #class-schedule-list element
document.querySelector("#class-schedule-list").textContent;
console.log(document.querySelector("#class-schedule-list").textContent);

// select the classList for the first class-week, then add the class "week-1"
const classList = document.querySelector(".class-week");
classList.classList.add("week-1");

// select the img element and add a src attribute
document.querySelector("img").src = 
"https://i2.pickpik.com/photos/774/556/1024/odin-male-australian-shepherd-dog-thumb.jpg";

// change the font color of the h1 element
document.querySelector("h1").style.color = "red";
