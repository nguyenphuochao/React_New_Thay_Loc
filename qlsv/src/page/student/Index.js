import React, { useEffect, useState } from 'react'
import axios from 'axios';
import StudentList from '../../component/StudentList';
import Loading from '../../component/Loading';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
function Index() {

    // Hàm lưu trạng thái danh sách sinh viên
    const [items, setItems] = useState([]);

    // Hàm lưu trạng thái tổng số sinh viênx`
    const [totalItem, setTotalItem] = useState(0);

    // Hàm lưu trạng thái Loading
    const [isLoading, setIsLoading] = useState(false);

    // code trong useEffect sẽ chạy trong 1 lần đầu tiên
    useEffect(() => {
        getStudent();
    }, []);

    // luật bên trong hàm là await thì phải dùng async
    const getStudent = async () => {

        // call api lấy dữ liệu về, sau khi dữ liệu lấy bỏ vào biến items
        try {
            const response = await axios.get('http://api_qlsvk99.com/api/v1/students');
            console.log(response);
            setItems(response.data.items);
            setTotalItem(response.data.totalItem);
            setIsLoading(true);
        } catch (error) {
            console.log(error);
            setIsLoading(true);
            toast.error('API thất bại');
        }
    }

    return (
        <>
            <div>
                <Helmet>
                    <title>Danh sách sinh viên</title>
                </Helmet>
                <h1>Danh sách sinh viên</h1>
                <NavLink to="create/student" className="btn btn-info">Add</NavLink>
                <form action="list.html" method="GET">
                    <label className="form-inline justify-content-end">Tìm kiếm: <input type="search" name="search" className="form-control" defaultValue />
                        <button className="btn btn-danger">Tìm</button>
                    </label>
                </form>
                {/* Dùng props để truyền data */}
                {!isLoading ? <Loading /> : <StudentList items={items} />}
                <div>
                    <span>Số lượng: {totalItem}</span>
                </div>
            </div>

        </>
    )
}

export default Index
