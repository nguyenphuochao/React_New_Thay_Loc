import React, { useEffect, useState } from 'react'
import RegisterList from '../../component/RegisterList'
import { NavLink, useSearchParams } from 'react-router-dom'
import Search from '../../component/Search'
import Loading from '../../component/Loading'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { toast } from 'react-toastify'
import Pagination from '../../component/Pagination'
import { updateParam } from '../../helper/util'


export function Index() {

    const [items, setItems] = useState([]);

    const [toltalItem, setTotalItem] = useState(0);

    const [loaded, setLoaded] = useState(false);

    const [pagination, setPagination] = useState({page : 1, totalPage: 0});

    const [searchParams, setSearchParams] = useSearchParams();

    const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

    const [search, setSearch] = useState(searchParams.get('search') || '');

    // getRegisters
    const getRegisters = async () => {
        try {
            // call api /api/v1/registers
            const response = await axios.get(`http://api_qlsvk99.com/api/v1/registers?page=${page}&search=${search}`);
            setItems(response.data.items);
            setTotalItem(response.data.totalItem);
            setPagination(response.data.pagination);
            setLoaded(true);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoaded(true);
        }
    }

    // Pagination
    const handlePage = (page) => {
        setPage(page);
        const newParams = {page: page};
        updateParam(searchParams, setSearchParams, newParams); 
    }

    // Search
    const handleSearch = (e, search) => {
        e.preventDefault();
        setSearch(search);
        setPage(1);
        const newParams = {search: search, page: 1};
        updateParam(searchParams, setSearchParams, newParams);
    }

    // confirm delete
    const handleConfirmDialog = async (id) => {
        try {
            // call api xóa
            const response = await axios.delete(`http://api_qlsvk99.com/api/v1/registers/${id}`);
            toast.success(response.data);
            getRegisters();
            setPage(1);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // hàm này chỉ chạy lần đầu tiên khi vào web
    useEffect(() => {
        getRegisters();
        // eslint-disable-next-line
    }, [page,search]);

    // render HTML
    return (
        <>
            <div>
                <Helmet>
                    <title>Danh sách sinh viên đăng ký môn học | {process.env.REACT_APP_NAME}</title>
                </Helmet>

                <h1>Danh sách sinh viên đăng ký môn học</h1>

                <NavLink to="/register/create" className="btn btn-info">Add</NavLink>

                <Search handleSearch={handleSearch} search={search} />

                {!loaded ? <Loading /> : <RegisterList items={items} handleConfirmDialog={handleConfirmDialog} />}

                <div>
                    <span>Số lượng: {toltalItem}</span>
                </div>

                <Pagination pagination={pagination} handlePage={handlePage} />

            </div>

        </>
    )
}
