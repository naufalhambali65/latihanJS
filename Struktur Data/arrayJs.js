let myArray = ["mobil", 123, 1.1, true, "testes"];
console.log(myArray);
console.log(myArray[1]);

myArray.push('helow'); //push() berfungsi untuk tambah elemen diakhir array
console.log(myArray);
myArray.pop(); //pop() berfungsi untuk menhapus data terakhir dari elemen
console.log(myArray);

myArray.shift(); //shift() berfungsi untuk mengeluarkan elemen pertama di array
console.log(myArray);
myArray.unshift("pesawat"); // unshift() berfungsi untuk menambahkan elemen pertama di array
console.log(myArray);

delete myArray[1];
console.log(myArray);
myArray[1] = 123;
console.log(myArray);

myArray.splice(1,1); //splice(index, jumlah elemen) berfungsi untuk menghapus elemen berdasarkan index dan berapa banyak elemen yang akan dhapus
console.log(myArray);
myArray.splice(1, 0, "ini index 1"); // splice() bisa berguna untuk menambahkan elemen ditengah array.
console.log(myArray);
