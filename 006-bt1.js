// BT: Kiem tra chuoi da dung chinh ta chua, neu chua thi lam cho dung
// VD: "phan thao"

const str = "Phan thao";
let result = false;

const strs = str.split(' '); // strs = ["phan", "thao"]
const ho = strs[0];
const ten = strs[1];

const kituDauHo = ho.charAt(0); // P
const kituDauTen = ten.charAt(0); // t

const kituDauHoMongMuon = kituDauHo.toUpperCase(); // P
const kituDauTenMongMuon = kituDauTen.toUpperCase(); // T

const hoConLai = ho.slice(1);
const tenConLai = ten.slice(1);

if (kituDauHo == kituDauHoMongMuon) {
  result = true
} else {
  result = false
}

if (kituDauTen == kituDauTenMongMuon) {
  result = true
} else {
  result = false
}

console.log(result);

// P han T hao
console.log(`${kituDauHoMongMuon}${hoConLai} ${kituDauTenMongMuon}${tenConLai}`);