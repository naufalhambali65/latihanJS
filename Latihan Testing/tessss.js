function multiply(num) {
return num * num;
    
}

const result = multiply(3);

console.log(result);

class Car { }
const car = new Car();
console.log(typeof car);

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyError";
    }
}

try {
    asdf;
    // throw new MyError("This is an error");
} catch (e) {
    console.log(typeof e);
}