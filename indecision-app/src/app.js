// import "./utils.js";
import subtactDefault, { square, add } from "./utils.js"; // the name should be same as exported
import isSenior, { isAdult, canDrink } from "./person.js";
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>this is jsx</p>;
ReactDOM.render(template, document.getElementById('app'));

console.log("app.js is running.!!!");
console.log(square(4));
console.log(add(4, 10));
console.log(subtactDefault(4, 10));

console.log(isAdult(20));
console.log(canDrink(100));
console.log(isSenior(100));

console.log(validator.isEmail('test@gmail.com')); 