const studentArray = [
  {
    firstName: "John",
    lastName: "Doe",
    GPA: 3.8,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    GPA: 3.9,
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    GPA: 3.5,
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    GPA: 4.0,
  },
  {
    firstName: "William",
    lastName: "Wilson",
    GPA: 3.7,
  },
  {
    firstName: "Olivia",
    lastName: "Davis",
    GPA: 3.6,
  },
  {
    firstName: "Daniel",
    lastName: "Martinez",
    GPA: 3.2,
  },
  {
    firstName: "Sophia",
    lastName: "Taylor",
    GPA: 3.9,
  },
  {
    firstName: "John",
    lastName: "Anderson",
    GPA: 3.3,
  },
  {
    firstName: "Ava",
    lastName: "Garcia",
    GPA: 3.8,
  },
];

// Buatlah functions untuk pertanyaan-pertanyaan di bawah ini lalu print hasil output:
// 1. Untuk student dengan GPA di atas 3.5, tambahkan status "CUM LAUDE", sisanya tambahkan status "PASS" ke dalam object dengan menggunakan map.
function addStatus(studentArray) {
  const gpa = studentArray.map((value) => {
    if (value.GPA >= 3.5) {
      return {
        ...value,
        status: "CUM LAUDE",
      };
    } else {
      return {
        ...value,
        status: "PASS",
      };
    }
  });
  return gpa;
}
const newStudentArray = addStatus(studentArray);
console.log(newStudentArray);

function addStatusAlternative(studentArray) {
  const gpa = studentArray.map((value) => {
    const graduateStatus = value.GPA >= 3.5 ? "CUM LAUDE" : "PASS";
    return { ...value, status: graduateStatus };
  });
  return gpa;
}
function addStatusAlternativeSimpler(studentArray) {
  const gpa = studentArray.map((value) => {
    return { ...value, status: value.GPA >= 3.5 ? "CUM LAUDE" : "PASS" };
  });
  return gpa;
}

// 2. Hitung rata-rata GPA dari semua students. Hint: gunakan reduce
function hitungRataRataGPA(studentArray) {
  const totalGPA = studentArray.reduce(
    (prev, current) => prev + current.GPA,
    0
  );
  console.log("totalGPA", totalGPA);
  console.log("total Student", studentArray.length);

  return (totalGPA / studentArray.length).toFixed(2);
}

const rataan = hitungRataRataGPA(studentArray);
console.log("rata rata GPA:", rataan);

// 3. Temukan student dengan nama John. Hint: gunakan find
function findingStudentWithName(studentArray, targetName) {
  const finding = studentArray.find((value) => value.firstName === targetName);
  return finding;
}

const finding = findingStudentWithName(studentArray, "John");
console.log("data student terkait:", finding);

function findingStudentAttribute(studentArray, attribute, valueAttribute) {
  const finding = studentArray.find(
    (value) => value[attribute] === valueAttribute
  );
  return finding;
}

const lastNameFinding = findingStudentAttribute(
  studentArray,
  "lastName",
  "Taylor"
);
console.log("find by lastname:", lastNameFinding);

const gpaFinding = findingStudentAttribute(studentArray, "GPA", 0.3);
console.log("find by gpa", gpaFinding);
const gpaFinding2 = findingStudentAttribute(studentArray, "GPA", 3.3);
console.log("find by gpa", gpaFinding2);


function multipleFindingStudentAttribute(studentArray, attribute, valueAttribute) {
  const finding = studentArray.filter(
    (value) => value[attribute] === valueAttribute
  );
  return finding;
}

const findMultipleJohn = multipleFindingStudentAttribute(studentArray, "firstName", "John")
console.log('find multi john:', findMultipleJohn)