const profile ={
    firstName : "Naufal",
    lastName : "Hambali",
    age: 19
}
console.log(profile.firstName);
console.log(profile);

//const{firstName, lastName, age} = profile; //destrukturisasi agar tidak perlu memanggil objek parentnya
console.log(profile);
//console.log(firstName, lastName, age);

let firstName = "Hahahhaha";

console.log(firstName);
({firstName} = profile);

console.log(firstName);

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);