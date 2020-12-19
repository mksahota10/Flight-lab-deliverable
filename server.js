const dbConfig = require('./config/db.config')


const db = require("./models");
const Flight = require('./models/flight.model');
const Terminal = require('./models/terminal.model');
const Airport = db.airport;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

airport.save()
console.log("Airport saved", airport)

const airport1 = new Airport ({
  name: "JFK", 
  country: "USA", 
  opened: "1990-12-12"
})

airport1.save()
console.log("Airport saved", airport1)

// Lets Make and Save our first airport
//create into server 
//saving documents into other documents 

      const flight1 = new Flight({
        from: "CDG France", 
        to: "'JFK New York, USA", 
        airline: 'American Airlines'
      
      })
      flight1.save()
      console.log("Flight saved", flight1)
      
      const flight2 = new Flight({
        from: "Heathrow UK", 
        to: "JFK New-York, USA", 
        airline: "British Airlines"
      })
      flight2.save()
      console.log("Flight saved", flight2)

//
      // Lets Make and Save our first airport

      //new terimanil, pass all the variables in the model 

      const terminal1 = new Terminal ({
        name:"JFK",
        capacity: "234324"
      })
      //pushing flights 1 and 2 into flights 
      terminal1.flights.push(flight1);
      terminal1.flights.push(flight2);
      terminal1.save()
      console.log("terminal saved", terminal1)



