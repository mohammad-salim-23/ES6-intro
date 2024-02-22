const numbers = [12,13,14,22];
// numbers = [9,0,98]; it's not allow because you declare const
numbers[1]=55;
numbers.push(8,88,0);
// console.log(numbers);
// object
const student = {
    name:'moyna pakhi',
    class:12,

}
// student={name:'moyur pakhi'} it's not allow because you declare const
student.name = 'moyur konthi';
console.log(student);