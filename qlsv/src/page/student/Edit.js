import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom';
import EditStudentForm from '../../component/EditStudentForm';
import Loading from '../../component/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Edit() {
    const navigate = useNavigate();
    // lấy ra slug từ url params
    const { slug } = useParams();
    const parts = slug.split('.');
    const partOne = parts[0];

    const smallParts = partOne.split('-');
    const id = smallParts[smallParts.length - 1];

    const [student, setStudent] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const getStudent = async () => {
        try {
            // call API detail
            const response = await axios.get(`http://api_qlsvk99.com/api/v1/students/${id}`);
            setStudent(response.data);
            setLoaded(true);
        } catch (error) {
            toast.error(error.message);
            setLoaded(true);
        }
    }

    const handleUpdate = async (values) => {
        // console.log(values);
        // call API update
        try {
            const response = await axios.put(`http://api_qlsvk99.com/api/v1/students/${id}`, JSON.stringify(values));
            const name = response.data.name;
            toast.success(`Cập nhật sinh viên ${name} thành công`);
            navigate('/');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getStudent();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div>
                <Helmet>
                    <title>Chỉnh sửa sinh viên {student?.name || ''} | {process.env.REACT_APP_NAME}</title>
                </Helmet>

                <h1>Chỉnh sửa sinh viên</h1>

                {
                    loaded ? <EditStudentForm student={student} handleUpdate={handleUpdate} /> : <Loading />
                }

            </div>
        </>
    )
}
