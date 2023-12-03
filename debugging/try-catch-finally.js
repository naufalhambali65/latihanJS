// perbedaan dengan try n catch yaitu disini terdapat blok finally
// blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada block try-catch

try {
    console.log("Awal blok try");
    teserror;
    console.log("Akhir blok try");
  } 
  catch (error) {
    console.log("Baris ini diabaikan");
  } 
  finally {
    console.log("Akan tetap dieksekusi");
  }