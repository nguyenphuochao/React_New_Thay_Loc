import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Detail() {
    // lấy ra slug từ url params
    const {slug} = useParams();
    const parts = slug.split('.');
    const partOne = parts[0];

    const smallParts = partOne.split('-');
    const id = smallParts[smallParts.length - 1];

    const [student, setStudent] = useState(null);

    const getStudent = async () => {
        try {
            // call API lấy dữ liệu từ server về
            const response = await axios.get(`http://api_qlsvk99.com/api/v1/students/${id}`);
            setStudent(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getStudent();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Helmet>
                <title>Chi tiết sinh viên | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <div className="container mt-4">
                {/* ID */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            Mã SV:
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            {/* kiểm tra xem có student hok?. Nếu có thì lấy cái thuộc tính id ra */}
                            {student?.id}
                        </div>
                    </div>
                </div>

                {/* Name */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            Tên:
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            {student?.name}
                        </div>
                    </div>
                </div>

                {/* Birthday */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            Ngày sinh:
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            {student?.birthday}
                        </div>
                    </div>
                </div>

                {/* Gender */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            Giới tính:
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            {student?.gender}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
