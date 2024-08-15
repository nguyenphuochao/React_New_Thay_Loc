import React, { useEffect, useState } from 'react'
import StudentList from '../../component/StudentList';
import Loading from '../../component/Loading';
import { toast } from 'react-toastify';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Pagination from '../../component/Pagination';
import Search from '../../component/Search';
import { axiosAuthInstance, updateParam } from '../../helper/util';
function Index() {

    // Trạng thái lưu dữ liệu  danh sách sinh viên từ server trả về
    const [items, setItems] = useState([]);

    // Trạng thái lưu tổng số lượng
    const [totalItem, setTotalItem] = useState(0);

    // Trạng thái để biết dữ liệu đã về chưa
    const [isLoading, setIsLoading] = useState(false);

    // Trạng thái lưu dữ liệu phân trang
    const [pagination, setPagination] = useState({ page: 1, totalPage: 0 });

    const [searchParams, setSearchParams] = useSearchParams();
    //console.log(searchParams);

    // searchParams.get('page') có giá trị thì trả về, ngược lại thì trả về số 1
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

    // trạng thái search
    const [search, setSearch] = useState(searchParams.get('search') || '');

    // code trong useEffect sẽ chạy trong 1 lần đầu tiên
    // khi page change thì code trong useEffect(() =>{...}) sẽ chạy lại
    useEffect(() => {
        getStudents();
        // eslint-disable-next-line
    }, [page, search]); // truyền vào tham số để render lại component

    // hàm lấy page truyền props ngược
    const handlePage = (page) => {
        //console.log(page);
        setPage(page);

        const newParams = { page: page };
        updateParam(searchParams, setSearchParams, newParams);
    }

    const handleSearch = (e, search) => {
        e.preventDefault(); // ngăn mặc định, ko cho submit lên server
        setSearch(search);
        setPage(1); // reset page thành 1
        // console.log(search);
        const newParams = { search: search, page: 1 };
        updateParam(searchParams, setSearchParams, newParams);
    }

    // luật bên trong hàm là await thì phải dùng async
    // mỗi khi page thay đổi thì getStudents() phải chạy lại
    const getStudents = async () => {
        // call api lấy dữ liệu về, sau khi dữ liệu lấy bỏ vào biến items
        try {
            // const response = await axiosAuthInstance().get(`/students?page=${page}&search=${search}`);
            const response = await axiosAuthInstance().get(`/students?page=${page}&search=${search}`);
            console.log(response);
            setItems(response.data.items);
            setTotalItem(response.data.totalItem);
            setPagination(response.data.pagination);
            setIsLoading(true);
        } catch (error) {
            console.log(error);
            setIsLoading(true);
            toast.error(error.message);
        }
    }

    // Xác nhận xóa
    const handleConfirmDialog = async (currentId) => {
        // call API xóa sinh viên
        try {
            const response = await axiosAuthInstance().delete(`/students/${currentId}`);
            toast.success(response.data);
            getStudents();
            setPage(1); // reset page thành 1
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Danh sách sinh viên | {process.env.REACT_APP_NAME} </title>
                </Helmet>
                <h1>Danh sách sinh viên</h1>
                <NavLink to="/create" className="btn btn-info">Add</NavLink>

                {/* Search */}
                <Search handleSearch={handleSearch} search={search} />

                {/* Dùng props để truyền data */}
                {!isLoading ? <Loading /> : <StudentList items={items} handleConfirmDialog={handleConfirmDialog} />}

                <div>
                    <span>Số lượng: {totalItem}</span>
                </div>

                {/* Phân trang */}
                <Pagination pagination={pagination} handlePage={handlePage} />

            </div>

        </>
    )
}

export default Index
