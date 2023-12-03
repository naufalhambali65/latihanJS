// array.filter digunakan untuk memfilter isi dari array.

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item)); // filter nilai false dari array

console.log(truthyArray);

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
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);