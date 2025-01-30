import axios from "axios";
import slugify from "react-slugify";
import numeral from 'numeral'
import 'numeral/locales';
numeral.locale('vi');

export const updateParam = (searchParams, setSearchParams, newParams) => {
    let params = {}
    // searchParams chứa param hiện tại trên thanh địa chỉ web
    for (const [key, value] of searchParams.entries()) {
        // key là tên param, value là giá trị của param đó
        // vd: page=2&search=ty thì tên param là page, giá trị là 2
        params[key] = value;
    }

    // thêm mới param, dùng es6 (spread)
    // searchParams = {page: 2, conga: 3}
    // newParams = {search: 'Ty', concho: 4}
    // params = {page: 2, conga: 3, search: 'Ty', concho: 4}
    params = { ...params, ...newParams };

    // cập nhật param trên thanh địa chỉ
    setSearchParams(params);
}

// xác thực token đăng nhập
export const axiosAuthInstance = () => axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${getAuthInfo().access_token}` // token
    }
});

// Hàm lấy ra thông tin đã login
export const getAuthInfo = () => {
    const authInfo = localStorage.getItem('authInfo');
    let initialState;

    if (!authInfo) {
        initialState = { isLogin: false, access_token: null, loggedUser: null };
    } else {
        initialState = JSON.parse(authInfo); // chuyển từ string sang object
    }

    return initialState;
}

// không xác thực
export const axiosNonAuthInstance = () => axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Lấy ra ID của danh mục để query
export const getCategoryId = (slug) => {
    if (!slug) return '';
    const slugParts = slug.split('-');
    const categoryId = slugParts.pop();
    return categoryId;
}

// Lấy ra ID của sản phẩm để query
export const getProductId = (slug) => {
    if (!slug) return '';
    const slugParts = slug.split('.html'); // cắt chuỗi ở chỗ cuối cùng
    const leftPart = slugParts[0]; // id nằm ở phần tử cuối
    const parts = leftPart.split('-'); // cắt ở đầu -
    const productId = parts.pop(); // id là phần nằm PT cuối danh sách
    return productId;
}

// Lấy ID của order
export const getOrderId = (slug) => {
    if (!slug) return '';
    const slugParts = slug.split('.html'); // cắt chuỗi ở chỗ cuối cùng
    const leftPart = slugParts[0]; // id nằm ở phần tử cuối
    const parts = leftPart.split('-'); // cắt ở đầu -
    const orderId = parts.pop(); // id là phần nằm PT cuối danh sách
    return orderId;
}

// Lấy đường dẫn sản phẩm theo danh mục
export const createLinkCategory = (category) => {
    return `/danh-muc/${slugify(category.name)}-${category.id}`;
}

// Đường dẫn chi tiết sản phẩm
export const createLinkProduct = (product) => {
    return `/san-pham/${slugify(product.name)}-${product.id}.html`;
}

// Đường dẫn lấy chi tiết đơn hàng
export const createLinkOrderDetail = (order) => {
    return `/don-hang/chi-tiet-don-hang-${slugify(order.id)}.html`;
}

// Hàm format tiền
export const formatMoney = (money) => {
    return numeral(money).format('0,0');
}

// viết hàm thêm 1 sp vào giỏ hàng
export const pre_add_to_cart = (arr, input) => {
    // kiểm tra xem có bị trùng không, và trả về chỉ số của pt bị trùng
    // nếu không trùng trả về giá trị -1
    const newArray = JSON.parse(JSON.stringify(arr));

    const index = newArray.findIndex((item) => item.id === input.id);
    if (index !== -1) {
        newArray[index].qty += Number(input.qty);
    } else {
        newArray.push(input);
    }

    return newArray;
}

// Xóa sp khỏi giỏ hàng
export const pre_remove_from_cart = (arr, id) => {
    // kiểm tra xem có bị trùng không, và trả về chỉ số của pt bị trùng
    // nếu không trùng trả về giá trị -1
    const newArray = JSON.parse(JSON.stringify(arr));

    const index = newArray.findIndex((item) => item.id === id);
    if (index !== -1) {
        newArray.splice(index, 1);
    }

    return newArray;
}

// cập nhật số lượng giỏ hàng
export const pre_update_cart = (arr, input) => {
    // kiểm tra xem có bị trùng không, và trả về chỉ số của pt bị trùng
    // nếu không trùng trả về giá trị -1
    const newArray = JSON.parse(JSON.stringify(arr));

    const index = newArray.findIndex((item) => item.id === input.id);
    if (index !== -1) {
        newArray[index].qty = input.qty;
    }

    return newArray;
}