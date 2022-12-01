const people = ["Greg", "Mary", "Devon", "James"];

people.shift("Greg");
console.log(people);

people.pop();
console.log(people);

people.unshift("Matt");
console.log(people);

people.push("John");
console.log(people);

console.log(people.slice(2, 4));

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

let newPeople = ["Greg", "Mary", "Devon", "James"];

newPeople.splice(2, 1, "Elizabeth", "Artie");
console.log(newPeople);

const withBob = newPeople.concat("Bob");
console.log(withBob);
