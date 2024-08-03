import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../component/Loading';
import SubjectList from '../../component/SubjectList';
import Pagination from '../../component/Pagination';
import { toast } from 'react-toastify';
import { updateParam } from '../../helper/util';
import { NavLink, useSearchParams } from 'react-router-dom';
import Search from '../../component/Search';

export function Index() {

    const [items, setitems] = useState([]);

    const [totalItem, setTotalItem] = useState(0);

    const [pagination, setPagination] = useState({ page: 1, totalPage: 0 });

    const [searchParams, setSearchParams] = useSearchParams(); // trạng thái lưu searchParams

    const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

    const [search, setSearch] = useState(searchParams.get('search') || '');

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getSubject();
        // eslint-disable-next-line
    }, [page,search])

    // phân trang
    const handlePage = (page) => {
        setPage(page);
        const newParams = { page: page };
        updateParam(searchParams, setSearchParams, newParams);
    }

    // search
    const handleSearch = (e, search) => {
        e.preventDefault();
        setSearch(search);
        setPage(1);
        const newParams = { search: search, page: 1 };
        updateParam(searchParams, setSearchParams, newParams);
    }

    const getSubject = async () => {
        try {
            // gọi API lấy data từ server
            const response = await axios.get(`http://api_qlsvk99.com/api/v1/subjects?page=${page}&search=${search}`);
            console.log(response);
            setitems(response.data.items);
            setPagination(response.data.pagination);
            setTotalItem(response.data.totalItem);
            setLoaded(true);
        } catch (error) {
            console.log(error.message);
            setLoaded(true);
            toast.error(error.message);
        }
    }

    return (
        <>
            <div>
                <h1>Danh sách Môn Học</h1>
                <NavLink to="/subject/create" className="btn btn-primary">Thêm</NavLink>

                {/* Search */}
                <Search handleSearch={handleSearch} search={search} />

                {!loaded ? <Loading /> : <SubjectList items={items} />}

                <div>
                    <span>Số lượng: {totalItem}</span>
                </div>

                {/* Pagination */}
                <Pagination pagination={pagination} handlePage={handlePage} />
            </div>
        </>
    )
}
