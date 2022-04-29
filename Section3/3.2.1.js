// create an Array using an Array literal
let x = 5;
let y = "hello";

const things = [x, y, 4, "6", "thanks", true, false, null];
// access the 1st item in the Array
console.log("things = ", things[0]);

// access the last item in the Array
console.log("things = ", things[7]);
// print the length of the Array
console.log(things.length);
// use the length property to access the last item in the Array
console.log("Element @ length-1 = ", things.length -1);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let something of things) {
  console.log(something);
}

a = 5;
b = 10;
a =+ b;