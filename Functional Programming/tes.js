// const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
//   };
  
//   const person = {
//     name: 'Bobo',
//     age: 12
//   };
  
//   const newPerson = createPersonWithAge(10, person);
  
//   console.log({
//     person,
//     newPerson
//   });
  

  const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  const newPerson1 = createPersonWithAge(19, person);
  
  console.log({
    person,
    newPerson,
    newPerson1
  });

  