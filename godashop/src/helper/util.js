import axios from "axios";
import slugify from "react-slugify";

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
        Authorization: `Bearer ???` // token
    }
});

// không xác thực
export const axiosNonAuthInstance = () => axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Lấy ra ID của danh mục để query
export const getCategoryId = (slug) => {
    if(!slug) return '';
    const slugParts = slug.split('-');
    const categoryId = slugParts.pop();
    return categoryId;
}

// Lấy đường dẫn sản phẩm theo danh mục
export const createLinkCategory = (category) => {
    return `/danh-muc/${slugify(category.name)}-${category.id}`;
}

// Dường dẫn chi tiết sản phẩm
export const createLinkProduct = (product) => {
    return `/san-pham/${slugify(product.name)}-${product.id}`;
}