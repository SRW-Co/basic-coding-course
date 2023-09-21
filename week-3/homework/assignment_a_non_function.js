let puzzle = "M@** 5t &td1!gqt und@x tq@ o$* tx@@ #* tq@ %3d l4gqtqous@";

//convert dari string menjadi array
const splitted = puzzle.split("");

const hint = [
	{ from: "@", to: "e" },
	{ from: "4", to: "i" },
	{ from: "x", to: "r" },
	{ from: "z", to: "k" },
	{ from: "q", to: "h" },
	{ from: "5", to: "a" }
];

//proses dekripsi pertama
for (let i = 0; i < hint.length; i++) {
	for (let j = 0; j < splitted.length; j++) {
		if (splitted[j] === hint[i].from) {
			splitted[j] = hint[i].to;
		}
	}
}

//sambungin kembali dari array menjadi string
puzzle = splitted.join("");

const hint2 = [
	{ from: "**", to: "et" },
	{ from: "&t", to: "mi" },
	{ from: "$*", to: "ak" },
	{ from: "#*", to: "by" },
	{ from: "%3", to: "ol" },
	{ from: "1!", to: "ni" }
];

//proses dekripsi kedua
for (let i = 0; i < hint2.length; i++) {
	puzzle = puzzle.replace(hint2[i].from, hint2[i].to);
}

console.log(puzzle);
