//perbedaan utama dari map dan object, yaitu object hanya bisa menampung key berupa string dan symbol
// sedangkan map dapat menampung lebih banyak tipe data sebagai key

const myMap = new Map([
    ['1' , 'string'],
    [1, 'number'],
    [true , true]
]);


console.log(myMap.get("1"));

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
  console.log(capital.size);
  console.log("jwbn " + capital.has("London"));
  capital.set("New Delhi", "India");
  console.log(capital.size);
  console.log(capital.get("New Delhi"));
  
  console.log(capital);
  console.log(capital.delete("Jakarta"));
  console.log(capital.get("Jakarta"));
  console.log(capital);