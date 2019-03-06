import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = "Mayank";
        // this.getGreeting = this.getGreeting.bind(this);
        // this is a fix for "this" but not a very good one.    
    }
    getGreeting() {
        return `hi. My name is ${this.name}`
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);
console.log(oldSyntax.getGreeting());
const getGreeting = oldSyntax.getGreeting;
//console.log(getGreeting());     // Here we get error becaue "this" is lost



// -------------------- //

class NewSyntax {
    name = 'Jan';
    getGreeting = () => {
        return `hi. My name is ${this.name}`
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());