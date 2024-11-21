// const linerSearch=require('./Searching.js')
// console.log(linerSearch([10,15,20,25,30]),15)
// Import the function using CommonJS require
const linerSearch = require('./Searchingandsetupbasicprojectcommn.js');
const basicprojectsetup= require('./ES_6setupbasicproject.mjs') //this is give error this is es6 modele and not able to access ES6 file in commonjs
console.log( basicprojectsetup)

// Test the function
console.log(linerSearch([10, 15, 20, 25, 30], 15)); // Output: 1
