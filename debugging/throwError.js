 // throw error berfungsi untuk memberikan pesan error jika suatu sintaks tidak bekerja sesuai yang kita inginkan dan sintaks tersebut juga tidak error
 // contohnya jika kita mengambil suatu object, ketika object tersebut kita ambil nilainya ternyata nilainya adalah undefined 
 // hal tersebut mengakibatkan sistem tetap berjalan tetapi tidak ada data yang masuk ke dalam sistem

 //contoh 

 const json = '{"name" : "naufal", "age" : 18}'; //format json

 try{
    const obj = JSON.parse(json);
    if (!obj.name){
        throw new SyntaxError("'name' is required");
    }

    blabla; // hal ini akan ditampilkan sebagai JSON Error! error not defined, karena error ini tidak termasuk if statement diatas
    console.log(obj.name);
    console.log(obj.age);
 }catch(error){
    // untuk mengatasi error yang tidak tercover maka kita juga harus membuat if statement seperti dibawah ini
    if(error instanceof SyntaxError){
        console.log(`JSON Error! ${error.message}`);
    }
    else if(error instanceof ReferenceError){
        console.log(`Theres Error! ${error.message}`);
    }
    else{
        console.log(error.stack);
    }
 }

