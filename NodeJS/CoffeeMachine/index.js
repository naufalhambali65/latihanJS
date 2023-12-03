// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// const {coffeeStock, isCoffeeMachineReady} = require("./state"); // import object dari state.js (format commonjs)

// Catatan! jika menggunakan format ES6 jangan lupa menambahkan "type": "module" pada package.json
// jika lupa, maka ES6 module tidak akan aktif 
// import coffeeStock from "./state.js"; // import 1 object dengan menggunakan ES6 module format (catatan, jika hanya 1 object yang diexport menggunakan ES6 kita bisa inisiasi variabel sesuka kita)

// import {coffeeStock, isCoffeeMachineReady} from "./state.js"; // import banyak object dengan menggunakan ES6 Module format

// Jika kita ingin import variabel dengan nama yang berbeda maka kita bisa menggunakan keyword as
import {coffeeStock as stockCoffee, isCoffeeMachineReady} from "./state.js";
console.log(isCoffeeMachineReady);

const makeCoffee = (stock, type) => {
    if(stockCoffee[type] <= stock){
        console.log(`coffee dengan tipe ${type} telah dibuat menggunakan ${stockCoffee[type]} bijih kopi`);

    }
    else {
        console.log(`Stok Coffee dengan tipe ${type} telah habis!`);
    }
}

makeCoffee(101, "arabica");