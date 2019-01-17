//----------DESTRUCTING And Rest Parameters----------

let [z, ...rest] = ["john", "doe", "lorem"];
console.log(rest);

//----------Object----------

let admin = {
  firstName: "zubair",
  dob: "2-3-2002",
  age: "23"
};
let user = {
  lastName: "Iqbal",
  hobbies: ["cricket", "programming"]
};

let a = { ...admin, ...user };

// let { firstName, ...rest } = admin;

console.log(a);

const x = "zubair iqbal";
const d = "zubair.iqbal";
const e = "zubairiq/bal";
const y = x.split("");
const c = d.split(".");
const v = e.split("/");

console.log(y);
console.log(c);
console.log(v);

//----------Array of objects----------
const users = [
  { firstName: "saad", lastName: "iqbal", age: 20 },
  { firstName: "zubair", lastName: "iqbal", age: 23 },
  { firstName: "waqar", dob: "ali", age: 23 },
  { firstName: "waheed", lastName: "iqbal", age: 25 }
];

// LOOP
//----------FOR OF LOOP----------

for (const item of users) {
  console.log(item);
}

// FOR IN LOOP

for (const item in users) {
  console.log(user);
}

// FOREACH LOOP

const cNames = ["toyota", "nissan", "bmw"];

cNames.forEach(function(item, index) {
  console.log(`${cNames[index]}`);
});
