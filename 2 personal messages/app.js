"use strict";
let personName = '';
personName = prompt('What is your namr?');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, would you like to learn some python today?`);
}
else {
    alert('You have to fill your name !');
}
