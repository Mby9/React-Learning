const add = (a,b) => {
    //console.log(arguments);    no more accessible in arrow functions
    return a+b;
};
console.log(add(55,1,1001))

// this keyword is no longer bound to the function

const user = {
    name: "andrew",
    cities: ["kanpour", "Noida", "Gurugram"],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        //this.name is not accessible here
        //const that = this;
        /* Regular ES5 function
        this.cities.forEach(function (city) {
            //this.name is not accessible here
            // that is accessible here
            console.log(this.name + " has lived in " + city);
        });*/
        // However this can be prevented in arrow function
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};
user.printPlacesLived();

//more simplified
/*printPlacesLived: function () {
    this.cities.forEach((city) => {
        console.log(this.name + " has lived in " + city);
    });
}*/
