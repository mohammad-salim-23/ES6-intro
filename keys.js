const glass={
    name:'glass',
    color:'golden',
 
    price:12,
    isCleaned :true,
};

const keys = Object.keys(glass);
console.log(keys);
const values= Object.values(glass);
console.log(values)

const entries = Object.entries(glass);
console.log(entries);
// 2 ways to remove any property
// delete glass.isCleaned;
const {isCleaned, ...shortGlass}= glass;

console.log(shortGlass);

// freeze
// Object.freeze(glass);
// glass.source= 'Bangladesh'
// delete glass.isCleaned;
// console.log(glass);

// seal
Object.seal(glass);
glass.source = 'Bangladesh';//kaj korbe na
glass.price = 5000;//sudu eita update hobe
delete glass.name;//kaj korbe na
console.log(glass);


