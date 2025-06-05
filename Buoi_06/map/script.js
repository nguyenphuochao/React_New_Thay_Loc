var arr = [1, 2, 3, 4, 5];

// tạo array mới, mỗi phần tử tăng lên 4 đon vị
// bên trong map là 1 callback function
var new_arr = arr.map((item, index) => item + 4);
console.log(new_arr);