// select the root node
const root = document.querySelector('html');
console.log("root node", document.querySelector('html'));
//
// select the last child of the root node
root.lastElementChild;
console.log("last child", document.querySelector('html').lastElementChild);
//
// select all the children of the body element
document.querySelector('body').children
console.log("body children", document.querySelector('body').children);
//
// select the next sibling of the h2 node
document.querySelector('h2').nextElementSibling
console.log("h2 next sibling", document.querySelector('h2').nextElementSibling);
//
// select the parent element of the h1 node
document.querySelector('h1').parentElement
console.log("h1 parent element", document.querySelector('h1').parentElement);
//