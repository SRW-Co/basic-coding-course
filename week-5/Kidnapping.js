const message = "M@** 5t &td1!gqt und@x tq@ o$* tx@@ #* tq@ %3d l4gqtqous@";

const decryptionKeys = [
  { from: "@", to: "e" },
  { from: "4", to: "i" },
  { from: "x", to: "r" },
  { from: "z", to: "k" },
  { from: "q", to: "h" },
  { from: "5", to: "a" },
];

const splitMessage = message.split("");

for (let i = 0; i < splitMessage.length; i++) {
  for (let j = 0; j < decryptionKeys.length; j++) {
    // console.log("decryptionKeys", j, decryptionKeys[j]);
    if (splitMessage[i] === decryptionKeys[j].from) {
      splitMessage[i] = decryptionKeys[j].to;
    }
  }
}
console.log(splitMessage.join(""));

let tahap1 = splitMessage.join("");
//Me** at &td1!ght under the o$* tree #* the %3d lighthouse

const decryptionKeys2 = [
  { from: "**", to: "et" },
  { from: "&t", to: "mi" },
  { from: "$*", to: "ak" },
  { from: "#*", to: "by" },
  { from: "%3", to: "ol" },
  { from: "1!", to: "ni" },
];

for (let i = 0; i < decryptionKeys2.length; i++) {
  tahap1 = tahap1.replace(decryptionKeys2[i].from, decryptionKeys2[i].to);
}

console.log(tahap1);
