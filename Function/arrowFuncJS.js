const sayHi = nama =>{ //simple 1 parameter arrow function
    return `halo ${nama}`;
}

console.log(sayHi("naufal")); // simple arrow function no param

const hello = () =>{
    return "hello";
}

console.log(hello());

const sum = (a, b) => a + b; //1line arrow function (no need return only for 1 line function)

console.log(sum(2, 2));
