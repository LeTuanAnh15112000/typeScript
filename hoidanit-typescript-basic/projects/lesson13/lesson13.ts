// let skills: (string | number)[] = ['Hỏi Dân IT', 25];
// skills.push('coding');
// skills.push(69);

// //tuple: dataType/size/order
// let skills2: [string, number] = ['Hỏi Dân IT', 25];

// let skills3: [boolean, string, number?];

// skills3 = [true, 'Eric'];
interface Person {
  name: string;
  age: number;
  address: string;
}

function printPerson({name , ...rest}: Person) {
  console.log(name);
  console.log(rest);
}

const person = {
  name: "John Doe",
  age: 30,
  address: "123 Main St."
}