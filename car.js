let Vehicle = require('./vehicle.js');

class Car extends Vehicle {
    constructor (carModel, carYear, carSpeed) {
        super(carModel, carYear, carSpeed);
    }
    displayInfo() {
        console.log(`It's a car model ${this.model};
        made in year ${this.year};
        car max speed ${this.carSpeed}`);
    }

    advertise() {
        console.log("Brand new car for the best price ever. Buy right now or someone else does");
    }
    
    getAge() {
        if (2018 - this.year < 2) console.log('Told you - a brand new car');
        else console.log('Ok, not a brand new but still not that old');
    }
    
    transportPeople() {
        console.log("I'm starting to transport people");
    }
}

module.exports = Car;
