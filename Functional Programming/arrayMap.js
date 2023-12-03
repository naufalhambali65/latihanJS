// fungsinya array.map itu untuk menduplikasi si array, dan hasilnya bisa kita ubah sesuai function yang kita mau
const array = ["naufal", "syafiq", "Hambali"];

const newArray = array.map((name) => `${name} ganteng`);

console.log(array);
console.log(newArray);

const mobil = {
    "nama" : "avanza",
    "speed" : 120
};
// cara menggunakan object sebagai pengganti array.
// jadi diambil dulu key nya dengan sintaks Object.keys(mobil)
// lalu outputnya dijadikan parameter (key) lalu tinggal dipanggil isinya.
const newMobil = Object.keys(mobil).map((key)=>{
    return mobil[key] + " testes";
})

console.log(mobil["nama"]);

console.log(Object.keys(mobil));

console.log(newMobil);

