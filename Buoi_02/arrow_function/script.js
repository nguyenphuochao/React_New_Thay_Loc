// Hàm thông thường
function tong1(a, b) {
    const c = a + b;
    return c;
}
console.log(tong1(5, 5));

// Hàm arrow function(hàm mũi tên)
const tong2 = (a, b) => {
    const c = a + b;
    return c;
}
console.log(tong2(6, 4));

// Gọn nữa
const tong3 = (a, b) => a + b;
console.log(tong3(7, 3));