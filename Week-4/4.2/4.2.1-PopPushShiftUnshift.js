const nums = [6, 5, 2, 3, 4, 1, 0];
console.log(nums);

// remove each of the last two items with pop(), saving each item to a variable
let popReturn = nums.pop();
let popReturn2 = nums.pop();
console.log(popReturn);
console.log(popReturn2);
console.log("pop" + nums);

// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift();
let shiftReturn2 = nums.shift();
console.log(shiftReturn);
console.log(shiftReturn2);
console.log("shift " + nums);

// use push and unshift to add the variables back to the array in numerical order, 0-6
let pushReturn = nums.push(5);
let pushReturn2 = nums.push(6);
let unshiftReturn = nums.unshift(1);
let unshiftReturn2 = nums.unshift(0);

console.log(nums);
console.log("done")