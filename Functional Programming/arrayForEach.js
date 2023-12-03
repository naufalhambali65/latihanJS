const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

// Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan 
// operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga 
// berlaku ketika pada fungsi map dan filter.