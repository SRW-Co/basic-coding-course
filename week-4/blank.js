// function penambahan(a, b) {
//   return a + b;
// }
const dikaliSepuluh = (a) => {
  return a * 10;
};
const penambahan = (a, b) => {
  return a + dikaliSepuluh(b);
};

function pembagian(a, b) {
  return a / b;
}

function pengurangan(a, b) {
  return a - b;
}
const a = 100;
const b = 15;
const hasilPengurangan = pengurangan(a, b);

console.log(penambahan(a, b));
console.log("hasilPengurangan:", hasilPengurangan);
console.log(pembagian(a, b));
