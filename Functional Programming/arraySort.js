// array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

// arr.sort([compareFunction])

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);

// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.