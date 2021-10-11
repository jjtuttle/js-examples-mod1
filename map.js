// map()

// for loop way
let circles = [
    10, 30, 50
];


// let areas = []; // to store areas of circles
// let area = 0;
// for (let i = 0; i < circles.length; i++) {
//     area = Math.floor(Math.PI * circles[i] * circles[i]);
//     areas.push(area);
// }
//console.log(areas);

//? callback function - helper
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
//? the map method to iterate of every element in circles and use a callback 
// TODO::
// 1. create var to store results (area)
// 2. call map() on each element in circles data array
// 3. with each circle element call the cb func (circleArea)
// 4. circleArea does its method's call to the element and returns the result
// 5. iterate each element until end of array and console.log() them
let areas = circles.map(circleArea);
//? console.log(areas);

//! ===============================================
//! map() from - https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=1s
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },

];

const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);

