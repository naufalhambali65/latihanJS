function multiply(a, b){ // simple parameter
    return a * b;
}

console.log(multiply(3, 5));

function sayHi(nama, waktu = "pagi"){ // default parameter
    return `Hi ${nama}, Selamat ${waktu}`;
}

console.log(sayHi("naufal"));

function sum(...numbers){ // Rest Param
    let result=0;
    for (let number of numbers){
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 5, 4));