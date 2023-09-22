const avengers = ["9$@!H#7L", "M$@!#NH*", "3$@!UG?", "3$@!US7N*", "K$@!79#N", "J$@!#3*O"];

//proses
for (const name of avengers) {
	const decrypted = name.toUpperCase().replaceAll("#", "I").replaceAll("?", "A").replaceAll("*", "O").replaceAll("3", "S").replaceAll("7", "E").replaceAll("9", "V").replaceAll("$@!", "");
	console.log("hasil dekripsi: ", decrypted);
}
