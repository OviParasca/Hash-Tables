'use strict';

const util = require('util');
const Hashmap = require('./lib/hashTable.js');

let myHash = new Hashmap();
myHash.add('John','Boss');
myHash.add('Cathy','The Real Boss');
myHash.add('Zach','Kid 1');
myHash.add('Allie','Kid 2');
myHash.add('Rosie','Dog');
myHash.add('Cat','TA');
myHash.add('Justin','Student');
myHash.add('Jason','Student');
myHash.add('Ben','Student');
myHash.add('Timea','Student');
myHash.add('Jen','Student');
myHash.add('Khalil','Student');
myHash.add('Michael','Student');
myHash.add('Ovi','Student');

exports.myHash = myHash;

// console.log(myHash.get('John'));
// console.log(myHash.update('Ovi', 'test Value 123'));
// console.log(myHash.delete('John'));
// console.log(util.inspect(myHash, {showHidden:false,depth:null}));
