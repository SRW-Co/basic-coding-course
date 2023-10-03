/* function name(params) {
    
 }
*/

function findRemainder(angkaAsal, pembagi) {
  return angkaAsal % pembagi === 0; // this will return boolean
}
function clg(text) {
  //   console.log("hasil:", text);
  return text;
}

function fizzBuzz(number) {
  if (findRemainder(number, 12)) {
    console.log("GojoSatoru");
  } else if (findRemainder(number, 4)) {
    const text = clg("Gojo");
    console.log("clg:", text);
    console.log("Gojo");
  } else if (findRemainder(number, 3)) {
    clg("Satoru");
  } else {
    clg("");
  }
}

const numberAsal = 44;
fizzBuzz(numberAsal);

// if (number % 12 === 0) {
//   console.log("GojoSatoru");
// } else if (number % 4 === 0) {
//   console.log("Gojo");
// } else if (number % 3 === 0) {
//   console.log("Satoru");
// } else {
//   console.log("");
// }
