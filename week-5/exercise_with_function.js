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
function getProjectLeadBy(daftar_klien, lead) {
	const result = daftar_klien.filter((value, index) => {
		return value.lead === lead;
	});
	return result;
}
const leadByJufina = getProjectLeadBy(daftar_klien, "Jufina");
const leadByCal = getProjectLeadBy(daftar_klien, "Callista");
const leadByAli = getProjectLeadBy(daftar_klien, "Ali");
console.log(leadByCal);
console.log(leadByJufina);
console.log(leadByAli);

//2. tampilkan semua project yang bertipe BUMN
function getProjectBy(daftar_klien, key, target) {
	const result = daftar_klien.filter(item => {
		return item[key] === target;
	});
	return result;
}
const bumn = getProjectBy(daftar_klien, "tipe", "BUMN");
const nonbumn = getProjectBy(daftar_klien, "tipe", "NON_BUMN");
console.log("bumn:", bumn);
console.log("nonbumn:", nonbumn);
const ledCal = getProjectBy(daftar_klien, "lead", "Callista");
console.log("ledcal:", ledCal);

//3. tampikan informasi skala project: jika member diatas 3 orang berskala besar, jika tidak maka berskala kecil
function insertSkala(daftar_klien) {
	const result = daftar_klien.map(item => {
		if (item.member.length > 3) {
			item.skala = "besar";
		} else {
			item.skala = "kecil";
		}
		return item;
	});
	return result;
}

const daftar_klien_with_skala = insertSkala(daftar_klien);
console.log("daftar klien skala:", daftar_klien_with_skala);

//4. tampilkan semua project yang berskala kecil
const projectKecil = getProjectBy(daftar_klien_with_skala, "skala", "kecil");
console.log("prjtKecil:", projectKecil);

//5. hitung total nominal semua project SRW&Co.
let total = 0;
for (let i = 0; i < daftar_klien.length; i++) {
	total += daftar_klien[i].total;
}
console.log("total:", total);
