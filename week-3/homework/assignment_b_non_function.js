const avengers = ["9$@!H#7L", "M$@!#NH*", "3$@!UG?", "3$@!US7N*", "K$@!79#N", "J$@!#3*O"];

//proses
for (const name of avengers) {
	const decrypted = name.toUpperCase().replace("#", "I").replace("?", "A").replace("*", "O").replace("3", "S").replace("7", "E").replace("9", "V").replace("$@!", "");
	console.log("hasil dekripsi: ", decrypted);
}
