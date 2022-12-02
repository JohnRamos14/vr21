const findSquares = (num) => {
  let min = Math.floor(num / 2);
  let max = Math.ceil(num / 2);

  console.log(min);
  console.log(max);
  return `${max ** 2}-${min ** 2}`;
};
console.log(findSquares(9));


function solution(str){
  let regex = /..?/g
  let matchStr = str.match(regex);

  if(matchStr === null) {
    matchStr = [];
  }else if(matchStr[matchStr.length - 1].length === 1) {
      matchStr[matchStr.length - 1] += '_';

  }
  return matchStr;
}

console.log("Even --> ", solution("test"));
console.log("Odd --> ", solution("testing"));
console.log("Empty ", solution(""));
