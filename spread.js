const numbers = [3,4,5,56,78,999,9];
const arrayMax = Math.max(numbers);
// console.log(arrayMax);//output NaN

// use spread operator
const arrayMaxS = Math.max(...numbers);
// console.log(arrayMaxS);

// use spread operator to copy
const friends = [4,5,87,9];
const bondhu = friends;// when you assign this method , it's also include another array refference . for that reason when you change value here it's also change here.if you want to avoid that type of change , you use spread operator
const dusto = [...friends];//just copy friend's array value

friends.push(7);

console.log(dusto);
console.log(friends);
// advanced
const sonka = [...friends,99999,9898];
console.log(sonka);