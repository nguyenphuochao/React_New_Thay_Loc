import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import EditSubjectForm from '../../component/EditSubjectForm';
import Loading from '../../component/Loading';

export function Edit() {
    const navigate = useNavigate();

    const { slug } = useParams();
    const parts = slug.split('.');
    const partOne = parts[0];

    const smallParts = partOne.split('-');
    const id = smallParts[smallParts.length - 1];

    const [subject, setSubject] = useState(null);

    const [loaded, setLoaded] = useState(false);

    const getSubject = async () => {
        // call API get subject
        try {
            const response = await axios.get(`http://api_qlsvk99.com/api/v1/subjects/${id}`);
            setSubject(response.data);
            setLoaded(true);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoaded(true);
        }
    }

    const handleUpdate = async (values) => {
        // call API update
        try {
            const response = await axios.put(`http://api_qlsvk99.com/api/v1/subjects/${id}`, JSON.stringify(values));
            const name = response.data.name;
            toast.success(`Cập nhật môn học ${name} thành công`);
            navigate('/subject');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getSubject();
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div>
                <Helmet>
                    <title>Chỉnh Sửa Môn Học | {process.env.REACT_APP_NAME}</title>
                </Helmet>

                <h1>Chỉnh Sửa Môn Học</h1>

                {
                    loaded ? <EditSubjectForm subject={subject} handleUpdate={handleUpdate} /> : <Loading />
                }

            </div>
        </>
    )
}
