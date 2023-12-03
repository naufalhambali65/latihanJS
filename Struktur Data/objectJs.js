//object js

const user = {
    namaDepan : "Naufal",
    namaBelakang : "Hambali",
    nim : "F55121035",
    prodi : "Teknik Informatika",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
    
}

console.log(user.nama);

user.nama = "bukan naufal";

console.log(user.nama);

delete user.prodi;

console.log(user.namaLengkap());


