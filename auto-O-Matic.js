function makeCar() {
	// makeCar() function defines property arrays for the car object
	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
	var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
	var years = [1955, 1957, 1948, 1954, 1961];
	var colors = ["red", "blue", "tan", "yellow", "white"];
	var convertible = [true, false];

	var rand1 = Math.floor(Math.random() * makes.length);
	var rand2 = Math.floor(Math.random() * models.length);
	var rand3 = Math.floor(Math.random() * years.length);
	var rand4 = Math.floor(Math.random() * colors.length);
	var rand5 = Math.floor(Math.random() * 5) + 1;
	var rand6 = Math.floor(Math.random() * 2);

	var car = {
		make: makes[rand1],
		model: models[rand2],
		year: years[rand3],
		color: colors[rand4],
		passengers: rand5,
		convertible: convertible[rand6],
		mileage: 88000,
		started: false, // ERROR: started is not defined?
		start: function () {
			this.started = true; // "this" tells the method where to find the started variable/property
		},
		stop: function () {
			this.started = false; // the started variable in in "this" object
		},
		drive: function () {
			if (this.started) {
				alert("Zoom Zoom!");
			} else {
				alert("You need to start the engine first.");
			}
		}
	}
	return car;
}

// function determines output if car is convertible
function convertible(car) {
	var convert = "convertible";
	var hardTop = "hard top";
	if (car.convertible) {
		convertDecision = convert;
	} else {
		convertDecision = hardTop;
	}
	return convertDecision;
}

// function determines output for number of passengers
function passengers(car) {
	var sedan = "sedan";
	var coupe = "coupe";
	if (car.passengers > 2) {
		passDecision = sedan;
	} else {
		passDecision = coupe;
	}
	return passDecision;
}

// function to display car model
function displayCar(car) {
	car.drive();
	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model + " " + convertible(car) + " " + passengers(car) + ".");
}

// create car
var carToSell = makeCar();
// display car model
displayCar(carToSell);