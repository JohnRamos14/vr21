let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


programming.languages.push("Go");
console.log(programming.languages);

programming.difficulty = 7;
console.log(programming);


delete programming.jokes;
console.log(programming);


programming.isFun = true;
console.log(programming);
