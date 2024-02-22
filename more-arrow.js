// single parameter
const getAge = (person)=> person.age;//implicit return
const Age = getAge({name:'Marjia',age:15});
console.log(Age);
// without parenthesis
const getThird = numbers => numbers[2];
const third = getThird([4,6,7,8,9])
console.group(third);
// no parameter
const getPI = ()=> Math.PI
console.log(getPI())

// large arrow function : if you want to get anything returned from this function . then you have to use the return keyword
const doMath = (x,y,z)=>{
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum+mult;
    return result;
}
const res = doMath(9,1,2);
console.log(res);