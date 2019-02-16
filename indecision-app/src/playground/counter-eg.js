class Person {
    // Constructor is not necessary. But if not we would loose access to data
    // ES6 format of function not supported
    constructor(name = "Anonymous", age = 0) { // Anonymous is default value
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return "Hi! " + this.name;
        // or better way to use back ticks and inject the variables
        return `Hi. I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } years old.`;
    }
}

// Sub-class of person
class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }
    hasMajor() {
        // !'' -> true
        // !undefined -> true
        return !!this.major;
    }
    //overriding method of super class
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Thier major is ${this.major}.`;
        }
    }
}

const me = new Person("Mayank Yadav");
console.log(me.getGreeting());

const other = new Person("Someone Else");
console.log(other.getDescription());

const student1 = new Student("Pehla bacchcha", 24, 'Computer Science');
Console.log(student1.getDescription());

const student2 = new Student();
console.log(student2.getDescription())