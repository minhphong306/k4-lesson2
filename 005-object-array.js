// bien
const a = 1;

// dung mang song song
const svName = "Phong";
const svAge = 11;

const sv2Name = "Tuyet";
const sv2Age = 13;

// console.log(svName);

// To chuc dang object
const sv1 = { name: "Phong", age: 11 };

// console.log(sv1);
// console.log(sv1.name);
// console.log(sv1["name"]);

const sv2 = {
  name: "Tuyet",
  age: 13,
  address: "Ha Noi",
  zipCode: 100
};

// Mang
// Length = so luong
// index: vi tri, index dem tu 0
const arr1 = [1, 2, 3, 4];
const classMembers = ["Vinh", "Thao", "Tuyet", "Khang"];
const classThings = ["Phong", 25, 100, 6.6, 1000.2];
const arrComplex = [100,  { name: "Phong", age: 11 }];

// console.log(arr1.length);
// console.log(arr1[2]);
// console.log(classMembers[3]);
// console.log(classThings[3]);

// Lam sao de in toan bo mang ra
// console.log(classThings[0]);
// console.log(classThings[1]);
// console.log(classThings[2]);
// console.log(classThings[3]);
// console.log(classThings[4]);

// console.log(classThings);
// console.log(arrComplex);

console.log(`[${classThings[0]}, ${classThings[1]}, ${classThings[2]}, ${classThings[3]}]`);