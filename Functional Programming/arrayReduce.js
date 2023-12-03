// Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk 
// mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan
// output satu nilai saja.

// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])

const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];

const totalScore = students.reduce((tmp, student) => tmp + student.score, 0);
console.log(totalScore)