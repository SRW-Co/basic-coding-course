function hasRemainder(angkaAsal, pembagi) {
	return angkaAsal % pembagi === 0; // this will return boolean
}

function fizzBuzz(number) {
	if (hasRemainder(number, 12)) {
		console.log("GojoSatoru");
	} else if (hasRemainder(number, 4)) {
		console.log("Gojo");
	} else if (hasRemainder(number, 3)) {
		console.log("Satoru");
	} else {
		console.log("");
	}
}

const numberAsal = 44;
fizzBuzz(numberAsal);
