import React, { useEffect, useState } from 'react'
import EditRegisterForm from '../../component/EditRegisterForm'
import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../component/Loading';

export function Edit() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const parts = slug.split('.');
    const partOne = parts[0];
    const smallParts = partOne.split('-');
    
    const id = smallParts[smallParts.length - 1];

    const [register, setRegister] = useState(null);

    const [loaded, setLoaded] = useState(false);

    const getRegister = async () => {
        // call API
        try {
            const response = await axios.get(`http://api_qlsvk99.com/api/v1/registers/${id}`);
            setRegister(response.data);
            setLoaded(true);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoaded(true);
        }
    }

    const handleUpdate = async (values) => {
        // call API
        try {
            const response = await axios.put(`http://api_qlsvk99.com/api/v1/registers/${id}`, JSON.stringify(values));
            const student_name = response.data.student_name;
            const subject_name = response.data.subject_name;
            const score = response.data.score;
            toast.success(`Sinh viên ${student_name} thi môn ${subject_name} được ${score} điểm`);
            navigate('/register');
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getRegister();
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <div>
                <Helmet>
                    <title>Cập nhật điểm | {process.env.REACT_APP_NAME}</title>
                </Helmet>

                <h1>Cập nhật điểm</h1>

                {loaded ? <EditRegisterForm register={register} handleUpdate={handleUpdate} /> : <Loading />}

            </div>
        </>
    )
}
