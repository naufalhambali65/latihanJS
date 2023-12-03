const coffeeStock = {
    arabica : 100,
    robusta : 150,
    liberica : 200
};

const isCoffeeMachineReady = true;

// module.exports = {coffeeStock, isCoffeeMachineReady}; // export object ke dalam module (format commonjs)

// Catatan! jika menggunakan format ES6 jangan lupa menambahkan "type": "module" pada package.json
// jika lupa, maka ES6 module tidak akan aktif 
//export default coffeeStock; // export 1 object ke module, menggunakan ES6 module format

export {coffeeStock, isCoffeeMachineReady}; // export banyak object ke module, menggunakan ES6 module format

