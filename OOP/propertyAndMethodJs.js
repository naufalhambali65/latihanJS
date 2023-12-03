
class Car {
    #chassisNumber = null; // # diawal berfungsi untuk membuat variabel menjadi private dan tidak bisa diakses diluar class
    constructor(brand, color, maxSpeed) {
      this.brand = brand; //termasuk property
      this.color = color;//termasuk property
      this.maxSpeed = maxSpeed; //termasuk property
      //this._chassisNumber = this._generateChassisNumber(); //termasuk property
      this.#chassisNumber = this.#generateChassisNumber(); //termasuk property
    }
   
    get chassisNumber() {
      return this.#chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }

    // Methods
    drive() {
        console.log(`${this.brand} ${this.color}, with chassis Number ${this.#chassisNumber} is driving`);
    }
    
    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }
    
    turn(direction) {
        console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }

    //_generateChassisNumber(){
    #generateChassisNumber(){
        return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  //console.log(car.#chassisNumber);
  //car.#generateChassisNumber();
  //car.#chassisNumber = 'BMW-1'; // _chassisNumber tetap bisa diedit, cuman berdsarkan kesepakatan programmer js, klo terdapat underscore didepan variabel, brarti variabel tersebut private dan tidak bisa diakses.
  console.log(car.chassisNumber);
  console.log(car);

car.turn("right");
car.drive();
car.chassisNumber = 'BMW-1';
car.drive();