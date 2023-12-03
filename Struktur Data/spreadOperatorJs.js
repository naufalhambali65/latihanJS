const fav = ["valo", "uang", "nugget"];

console.log(fav);

console.log(...fav); // spread operator, bisa meleburkan nilai array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others]; // spread operator, bisa menggabungkan 2 array dan meleburnya jadi 1

console.log(allFavorites);

// spead operator untuk menggabungkan beberapa object
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);