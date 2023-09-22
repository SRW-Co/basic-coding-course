function decrypting(encrypted_message, hints) {
	let decrypted_message = "";

	for (let i = 0; i < encrypted_message.length; i++) {
		let character = encrypted_message[i];

		for (const hint of hints) {
			if (encrypted_message.slice(i, i + hint.from.length) === hint.from) {
				character = hint.to;
				i += hint.from.length - 1; //skip karakter yang sudah diganti
				break;
			}
		}

		decrypted_message += character;
	}

	return decrypted_message;
}

const encrypted_message = "M@** 5t &td1!gqt und@x tq@ o$* tx@@ #* tq@ %3d l4gqtqous@";

const hint = [
	{ from: "@", to: "e" },
	{ from: "4", to: "i" },
	{ from: "x", to: "r" },
	{ from: "z", to: "k" },
	{ from: "q", to: "h" },
	{ from: "5", to: "a" }
];

const hint2 = [
	{ from: "**", to: "et" },
	{ from: "&t", to: "mi" },
	{ from: "$*", to: "ak" },
	{ from: "#*", to: "by" },
	{ from: "%3", to: "ol" },
	{ from: "1!", to: "ni" }
];

const message1 = decrypting(encrypted_message, hint);
console.log("message 1: ", message1);

const message2 = decrypting(message1, hint2);
console.log("message 2: ", message2);
