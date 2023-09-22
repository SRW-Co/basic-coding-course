const rangers = ["MINHO", "SUGA", "SUSENO", "JISOO", "VHIEL", "KEVIN"];
const avengers = ["9$@!H#7L", "M$@!#NH*", "3$@!UG?", "3$@!US7N*", "K$@!79#N", "J$@!#3*O"];

function encryption(string) {
	let formatted = string.toUpperCase().replaceAll("I", "#").replaceAll("A", "?").replaceAll("O", "*").replaceAll("S", "3").replaceAll("E", "7").replaceAll("V", "9");

	formatted = formatted.split("");
	formatted.splice(1, 0, "$@!");
	return formatted.join("");
}

function decryption(string) {
	return string.toUpperCase().replaceAll("#", "I").replaceAll("?", "A").replaceAll("*", "O").replaceAll("3", "S").replaceAll("7", "E").replaceAll("9", "V").replaceAll("$@!", "");
}

for (const name of avengers) {
	// const encrypted = encryption(name);
	// console.log("hasil enkripsi: ", encrypted);
	console.log("hasil dekripsi: ", decryption(name));
	console.log("---");
}
