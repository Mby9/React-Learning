const person = {
    name: "Mayank",
    age: 25,
    location: {
        city: "Kanpur",
        temp: 28
    }
};

// destructures are used to read from an object and assign values to multiple variables at a time
const {name: firstName = "Anonymous", age} = person;
// the above line is same as
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if( city && temperature )
//     console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'S Block']

const [ , , state = 'New York' ] = address;

console.log(`You are in  ${state}`);

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [ coffee, , cost, ] = item;

console.log(`A mdeium ${coffee} costs ${cost}`);