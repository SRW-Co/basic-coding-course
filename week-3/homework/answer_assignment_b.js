const rangers = ["MINHO", "SUGA", "SUSENO", "JISOO", "VHIEL", "KEVIN"];
const avengers = ["9$@!H#7L", "M$@!#NH*", "3$@!UG?", "3$@!US7N*", "K$@!79#N", "J$@!#3*O"];

const decryption_keys = [
	{ from: "#", to: "I" },
	{ from: "?", to: "A" },
	{ from: "*", to: "O" },
	{ from: "3", to: "S" },
	{ from: "7", to: "E" },
	{ from: "9", to: "V" },
	{ from: "$@!", to: "" }
];

function encryption(string) {
	for (const key of decryption_keys) {
		string = string.replace(key.to, key.from);
	}
	return string;
}

function decryption(string) {
	for (const key of decryption_keys) {
		string = string.replace(key.from, key.to);
	}
	return string;
}

//=======================================================
// 	displaying
//=======================================================

//proses dekripsi
for (const name of avengers) {
	console.log("hasil dekripsi: ", decryption(name));
}

//proses enkripsi
for (const name of rangers) {
	console.log("hasil enkripsi: ", encryption(name));
}
