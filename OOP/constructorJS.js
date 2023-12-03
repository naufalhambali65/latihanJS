// catatan! constructor function tidak dapat dideklarasikan dengan arrow function!!

function Car(brand, color, maxSpeed, chassisNumber ){
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

Car.prototype.drive = function (){
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function (){
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function (){
    console.log(`${this.brand} ${this.color} is turning`);
}

const car1 = new Car("toyota", "hitam", 120, 12345);
const car2 = new Car("avanza", "biru", 141, 54321);

console.log(car1);

car1.drive();
car2.reverse();

// sintaks Class di javascript (sama aja kek diatas, cuman dibawah ini dia menggunakan keyword class)

class Baju{
    constructor(ukuran, jk, warna, harga){
        this.ukuran = ukuran;
        this.jk = jk;
        this.warna = warna;
        this.harga = harga;
    }

    jual(){
        console.log(`Baju dengan ukuran ${this.ukuran}, untuk ${this.jk}, warna ${this.warna}, dengan harga ${this.harga} sedang dijual!`);
    }
    diskon(){
        console.log(`Baju dengan ukuran ${this.ukuran}, untuk ${this.jk}, warna ${this.warna}, dengan harga ${this.harga} sedang Diskon!`);
    }

}


const baju1 = new Baju(15, "laki laki", "merah", 150000);
console.log(baju1);
baju1.jual();
baju1.diskon();