// Step 1: Define the product interface - Transport
class Transport {
  deliver() {}
}

// Step 2: Creator class with an empty factory method - Logistics
class Logistics {
  createTransport() {}
  
  // Step 5: Replace product constructors with factory method calls
  planDelivery() {
    const transport = this.createTransport();
    transport.deliver();
  }
}

// Step 3: Implement product classes - AirMail and GroundMail
class AirMail extends Transport {
  deliver() {
    console.log('Delivering via air');
  }
}

class GroundMail extends Transport {
  deliver() {
    console.log('Delivering via ground');
  }
}

// Step 4: Implement creator subclasses - AirLogistics and GroundLogistics
class AirLogistics extends Logistics {
  createTransport() {
    return new AirMail();
  }
}

class GroundLogistics extends Logistics {
  createTransport() {
    return new GroundMail();
  }
}

// Example usage
const airLogistics = new AirLogistics();
const groundLogistics = new GroundLogistics();

airLogistics.planDelivery();    // Output: Delivering via air
groundLogistics.planDelivery(); // Output: Delivering via ground