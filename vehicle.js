class Vehicle {
    constructor(carModel, carYear, carSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.speed = carSpeed;
    }

    displayInfo() {
        console.log(`Model: ${this.model}
        Year: ${this.year}
        Speed: ${this.speed}`);
    }

    getAge() {
        console.log(`This car is only ${2018 - this.year} old`);
        this.year 
    }
} 

module.exports = Vehicle;
