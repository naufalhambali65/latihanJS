//array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.
// arr.some(callback(element, [index], [array]), [thisArg])


const array = [2, 4, 6, 8];

const isEven = array.some(element => element % 2 === 0);
console.log(isEven);