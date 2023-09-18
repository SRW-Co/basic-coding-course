const rangers = ["MINHO", "SUGA", "SUSENO", "JISOO", "VHIEL", "KEVIN"];
const avengers = ["9$@!H#7L", "M$@!#NH*", "3$@!UG?", "3$@!US7N*", "K$@!79#N", "J$@!#3*O"];

function encryption(string) {
	let formatted = string.toUpperCase().replace("I", "#").replace("A", "?").replace("O", "*").replace("S", "3").replace("E", "7").replace("V", "9");

	formatted = formatted.split("");
	formatted.splice(1, 0, "$@!");
	return formatted.join("");
}

function decryption(string) {
	return string.toUpperCase().replace("#", "I").replace("?", "A").replace("*", "O").replace("3", "S").replace("7", "E").replace("9", "V").replace("$@!", "");
}

for (const name of avengers) {
	// const encrypted = encryption(name);
	// console.log("hasil enkripsi: ", encrypted);
	console.log("hasil dekripsi: ", decryption(name));
	console.log("---");
}
