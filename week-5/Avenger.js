const avengersCode = [
  "9$@!H#7L",
  "M$@!#NH*",
  "3$@!UG?",
  "3$@!US7N*",
  "K$@!79#N",
  "J$@!#3*O",
];

const decryptionKey = [
  { from: "#", to: "I" },
  { from: "?", to: "A" },
  { from: "*", to: "O" },
  { from: "3", to: "S" },
  { from: "7", to: "E" },
  { from: "9", to: "V" },
];

for (let i = 0; i < avengersCode.length; i++) {
  let namaAvenger = avengersCode[i];
  for (let j = 0; j < decryptionKey.length; j++) {
    namaAvenger = namaAvenger.replace(
      decryptionKey[j].from,
      decryptionKey[j].to
    );
  }
  // console.log(namaAvenger);

  namaAvenger = namaAvenger.replace("$@!", "");
  console.log(namaAvenger);
}
