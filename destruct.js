const actor = {
    name:'Bubli',
    age:45,
    phone:'01788789794',
    money:10101010101
}
// if right side is an object left side of destructuring will be object as well
// use property name as a variable that contains the property value
// const {phone,age} = actor;
// console.log(phone);
// console.log(age);

// if we want changed the property name , then it's also we do it 
const {phone:mobile,age:boyos}=  actor;
// console.log(boyos," ",mobile);
// console.log();

// araray destructuring
const numbers = [45,99]
const [first,second] = numbers;
// console.log(first,second);

// 
function doubleTheme(a,b){
    return [a*2,b*2];
}
const [prothom,ditiyo] = doubleTheme(6,9);
console.log(prothom,ditiyo);

