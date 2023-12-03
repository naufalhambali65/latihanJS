// format try n catch

//   try {
//   kode...
//   }catch (error) {
//   error handling...
//   }

try{
    console.log("hahahah");

    ngetesError;

    console.log("hahah1")
} catch(error){
    // console.log("jika tidak terjadi error, maka kode ini akan diabaikan");
    // console.log(error); //parameter error dapat menampilkan sebab sintaks tersebut error
    // berikut 3 atribut dari parameter error :
    console.log("error name : "+error.name); // nama error
    console.log("error message : "+error.message); // pesan tentang detail error
    console.log("error stack : "+error.stack); // informasi urutan kejadian yang menyebabkan error
}