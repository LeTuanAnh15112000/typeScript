class Person {
  private _age: number;
  public firstName: string;
  public lastName: string;

  constructor(_age: number, firstName: string, lastName: string) {
    this._age = _age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //getter
  get age() {
    return this._age;
  }

  //setter
  set age(age: number) {
    if(age < 0 || age > 150) {
      throw Error('Invalid age')
    }
    this._age = age;
  }
}
let person = new Person(25, 'le tuan anh', 'dep trai');
let age = person.age
person.age = (69) 
console.log(person);
