// custom error class berfungsi untuk membuat class yang akan menangani sejumlah error yang lebih spesifik
// hal ini bertujuan agar mempermudah dalam melakukan debugging, karena error yang ditampilkan akan lebih spesifik

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = ValidationError;
    }
}
const json = '{"age" : 18}'; 


 try{
    const obj = JSON.parse(json);
    if (!obj.name){
        throw new ValidationError("'name' is required");
    }
    if (!obj.age){
        throw new ValidationError("'age' is required");
    }
    console.log(obj.name);
    console.log(obj.age);
 }catch(error){
    if(error instanceof SyntaxError){
        console.log(`JSON Error! ${error.message}`);
    }
    else if(error instanceof ValidationError){
        console.log(`Invalid data! ${error.message}`);
    }
    else if(error instanceof ReferenceError){
        console.log(`Theres Error! ${error.message}`);
    }
    else{
        console.log(error.stack);
    }
 }