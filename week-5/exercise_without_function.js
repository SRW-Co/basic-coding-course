const klien1 = {
	nama: "Danareksa",
	tipe: "BUMN",
	lead: "Callista",
	member: ["Fajar", "Kevin", "Rizky", "Syiffa"],
	total: 300_000_000,
	durasi: 6
};

const klien2 = {
	nama: "PPA",
	tipe: "BUMN",
	lead: "Jufina",
	member: ["Ali", "Einstain", "Alma", "Icha"],
	total: 150_000_000,
	durasi: 4
};

const klien3 = {
	nama: "BJB",
	tipe: "NON_BUMN",
	lead: "Aryo",
	member: ["Kevin", "Mei", "Angga"],
	total: 200_000_000,
	durasi: 3
};

const daftar_klien = [klien1, klien2, klien3];

//1. tampilkan semua project yang di lead oleh Callista
const hasil1 = daftar_klien.filter(x => x.lead === "Callista");
console.log(" hasil1 ", hasil1);

//2. tampilkan semua project yang bertipe BUMN
const hasil2 = daftar_klien.filter(x => x.tipe === "BUMN");
console.log(" hasil2 ", hasil2);

//3. tampikan informasi skala project: jika member diatas 3 orang berskala besar, jika tidak maka berskala kecil
const hasil3 = daftar_klien.map(x => {
	const jumlah_anggota = x.member.length;

	let skala;

	if (jumlah_anggota > 3) skala = "Besar";
	else skala = "Kecil";

	return {
		...x,
		skala: skala
	};
});
console.log(" hasil3 ", hasil3);

//4. tampilkan semua project yang berskala kecil
const hasil4 = hasil3.filter(x => x.skala === "Kecil");
console.log(" hasil4 ", hasil4);

//5. hitung total nominal semua project SRW&Co.
let total_proyek = 0;

for (let i = 0; i < daftar_klien.length; i++) {
	total_proyek = total_proyek + daftar_klien[i].total;
}

console.log(" total proyek ", total_proyek);
