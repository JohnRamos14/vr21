// let str = "Hello World";
// let task = "console.log";
// let thoughts = "I have no idea what to write"
// let clToCreate = 30;
// let n = 5;
// let meObj = {
//   name: "John",
//   job: "apprentice"
// };
// let instructors ={
//   Java: "Jay",
//   AWS: "Richard",
//   JS: "Donte"
// }

// let isLoggedin = true;
// let isWorkday = true;
// let arr = [1, 2, 3, 4, 5];
// let topicsWeCovered = ["Java", "AWS", "CSS", "HTML", "JS",];
// let fastFood = ["McDonalds", "BurgerKing", "Chipotle", "Wendys"]
// let sportsArr = ["Basketball", "Football", "MMA", "Soccer", "Boxing"]
// let motoBrands = ["Ducati", "Yamaha", "Kawasaki", "Harley-Davidson"]

// console.log("Is this working?");
// console.log(`${thoughts} at this moment.`)
// console.log(`We have to create ${clToCreate} ${task} `);
// console.log(`Is today a workday? ${isWorkday}`)
// console.log(`Is ${meObj.name} logged in? ${isLoggedin}`);
// console.log(`My name is ${meObj.name} and I am an SDE ${meObj.job}`);
// console.log(`Type of n is: ${typeof n}`);
// console.log(`Type of str is: ${typeof str}`);
// console.log(`Type of arr is: ${typeof arr}`);
// console.log(`Type of obj is: ${typeof meObj}`);
// console.log(`Type of isLoggedin is: ${typeof isLoggedin}`);
// console.log(`Type of isLoggedin is: ${typeof isWorkday}`);
// console.log(`The instructors we had so far ${instructors.Java}, ${instructors.AWS}, ${instructors.JS}`)
// console.log(`The topics we covered so far are: ${topicsWeCovered.toString()}`);
// console.log(topicsWeCovered.length)
// console.log(`We are on the ${topicsWeCovered[4]} portion of ILT`);
// console.log(`The sports I like watching are: ${sportsArr.toString()}`);
// console.log(`I ride a ${motoBrands[0]}.`)

const sentence = "I am new to learning JavaScript";


console.log(sentence.slice(0, 8));
console.log(sentence.split(" "));
console.log(sentence.split("w"))
console.log(sentence.replace("I am", "We are"))


const userAge = prompt("How old are you?");

if(userAge > 21){
  console.log("you can enter the club.")
}else{
  console.log("Go Home")
}
