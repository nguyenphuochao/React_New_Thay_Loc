// cách thông thường lấy giá trị thuộc tính
const sv = { name: "Hảo", year: "1999-04-30", gender: "Nam" }
const name1 = sv.name;
const year1 = sv.year;
const gender1 = sv.gender;
console.log(name1, year1, gender1);
// Dùng destructuring
const { name, year, gender } = sv;
console.log(name, year, gender);