// closure adalah cara untuk membuat suatu function dan isinya menjadi private

const add = () => {
    let counter = 0;
      return () => {
        return ++counter;
    };
  }
  
  const addCounter = add();
  
  console.log(addCounter());
  console.log(addCounter());
  var counter = 10; //nilai dalam function tidak dapat diganggu dari luar
  console.log(addCounter());
  console.log(addCounter());
  console.log(counter);