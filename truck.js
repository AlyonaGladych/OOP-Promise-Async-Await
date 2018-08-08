let Vehicle = require('./vehicle.js');

class Truck extends Vehicle {
    constructor(carModel, carYear, carSpeed) {
    super(carModel, carYear, carSpeed);
    this.type = "truck";
    }
    
    displayInfo() {
        super.displayInfo();
        console.log("Please note, driving truck requires additional driver's license category");
    }

    transportContainer() {
        console.log("I'm starting to transport havy containers");
    }
}

module.exports = Truck;
