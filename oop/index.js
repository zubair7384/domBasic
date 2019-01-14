function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
User.prototype.greet = function() {
  return `Hi ${this.firstName} ${this.lastName} `;
};
const user1 = new User("Mueen", "Baig", 23);
const user2 = new User("Shaheen", "Rumi", 25);
const user3 = new User("Zubair", "Iqbal", 22);
const user4 = new User("Masood", "Alam", 34);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user1.greet());
console.log(user2.greet());
console.log(user3.greet());
console.log(user4.greet());

// function Admin(name, dateOfBirth) {
//   this.name = name;
//   this.dateOfBirth = dateOfBirth;
// }

// //Protoypes

// Admin.prototype.greeting = function(age) {
//   return `Hello Mr. ${this.name} your age is ${age}`;
// };
// Admin.prototype.getFullName = function() {
//   console.log(`${this.name}`);
// };
// const obj = new Admin("Zubair Iqbal");
// // console.log(obj.greeting(23));
// function Customer(name, dateOfBirth, description, salary, department) {
//   Admin.call(this, name, dateOfBirth);
//   this.description = description;
//   this.salary = salary;
// }
// Customer.prototype.list = function() {
//   return "hello world";
// };

// //METHODS

// // Customer.prototype = Object.create(Admin.prototype);
// const obj1 = new Customer("zubair", "1994", "hi zubair", 200000, "CS");
// console.log(obj1);
// // console.log(obj1);

//BUILTIN CONSTRACTORS

// const z = "zubair";
// console.log(typeof z);
// const z1 = new String("zubair");
// const b1 = new Boolean("true");
// console.log(b1);

// function TODO(greet) {
//   this.greet = greet;
// }
// TODO.prototype.AddItems = function(task) {};
// TODO.prototype.getItems = function() {};
// TODO.prototype.removeItems = function() {};
// const obj = new TODO("wellcome to todo app");
// obj.AddItems();
