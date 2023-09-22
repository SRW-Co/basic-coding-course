const studentArray = [
	{
		firstName: "John",
		lastName: "Doe",
		GPA: 3.8
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		GPA: 3.9
	},
	{
		firstName: "Michael",
		lastName: "Johnson",
		GPA: 3.5
	},
	{
		firstName: "Emily",
		lastName: "Brown",
		GPA: 4.0
	},
	{
		firstName: "William",
		lastName: "Wilson",
		GPA: 3.7
	},
	{
		firstName: "Olivia",
		lastName: "Davis",
		GPA: 3.6
	},
	{
		firstName: "Daniel",
		lastName: "Martinez",
		GPA: 3.2
	},
	{
		firstName: "Sophia",
		lastName: "Taylor",
		GPA: 3.9
	},
	{
		firstName: "John",
		lastName: "Anderson",
		GPA: 3.3
	},
	{
		firstName: "Ava",
		lastName: "Garcia",
		GPA: 3.8
	}
];

// Buatlah functions untuk pertanyaan-pertanyaan di bawah ini lalu print hasil output:
// 1. Untuk student dengan GPA di atas 3.5, tambahkan status "CUM LAUDE", sisanya tambahkan status "PASS" ke dalam object dengan menggunakan map.
const hasil = list => {
	return list.map(x => {
		return {
			...x,
			status: x.GPA > 3.5 ? "CUM LAUDE" : "PASS"
		};
	});
};
console.log(" hasil ", hasil(studentArray));

// 2. Hitung rata-rata GPA dari semua students. Hint: gunakan reduce
const average = list => {
	const total = list.reduce((prev, current) => prev + current.GPA, 0);
	return +(total / studentArray.length).toFixed(2);
};
console.log(" average ", average(studentArray));

// 3. Temukan student dengan nama John. Hint: gunakan find
const searchName = (list, search_name) => {
	return list.find(x => x.firstName.includes(search_name));
};
console.log(" found ", searchName(studentArray, "Joh"));
