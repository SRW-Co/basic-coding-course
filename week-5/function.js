function fungsiMatematis(x) {
	const a = 10;
	const b = 2;
	const fx = a * x + b;
	return fx;
}

// let a = 10;
// let b = 2;
// let x = 100;
const hasilFungsiMatematis = fungsiMatematis(100);
console.log(hasilFungsiMatematis);

function fungsiMatematisDua(x, a, b) {
	const fx = a * x + b;
	return fx;
}

// let a = 20;
// let b = 4;
// let x = 100;
// const hasilDua = fungsiMatematisDua(x, a, b);
// console.log(hasilDua);

const arrayOfObjects = [
	{ a: 10, b: 2, x: 100 },
	{ a: 20, b: 4, x: 100 }
];

// Jalankan fungsiMatematisDua ke arrayOfObjects
// const indexPertama = arrayOfObjects[0];
// console.log(indexPertama);

// const aPertama = indexPertama.a; // 10
// const bPertama = indexPertama.b; // 2
// const xPertama = indexPertama.x; // 100

// const hasil = fungsiMatematisDua(xPertama, aPertama, bPertama);
// console.log(hasil)

for (let i = 0; i < arrayOfObjects.length; i++) {
	// const indexPertama = arrayOfObjects[i];

	// const aPertama = indexPertama.a;
	// const bPertama = indexPertama.b;
	// const xPertama = indexPertama.x;

	const hasil = fungsiMatematisDua(arrayOfObjects[i].x, arrayOfObjects[i].a, arrayOfObjects[i].b);
	console.log("hasil:", hasil);
}
