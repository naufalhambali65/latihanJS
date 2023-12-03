const fav = ["valo", "nasi padang", "ayam"];

console.log(fav);

//const [first, second] = fav;

//console.log(first, ", ",second);

//const [, , third] = fav; //untuk mengambil index ditengah

//console.log(third);

let myFood = "Ice Cream";
let herFood = "Noodles";
 
[, myFood, herFood] = fav;
 
console.log(myFood);
console.log(herFood);

//digunakan untuk swap nilai variabel

let a = 5;
let b = 10;

console.log (a, b);
[a, b] = [b, a];

console.log(a, b);