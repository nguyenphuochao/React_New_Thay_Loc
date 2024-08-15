
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosAuthInstance } from '../../helper/util';

export function Detail() {

    const { slug } = useParams();
    const parts = slug.split('.');
    const partOne = parts[0];

    const smallParts = partOne.split('-');
    const id = smallParts[smallParts.length - 1];

    const [subject, setSubject] = useState(null);

    const getSubject = async () => {
        // call API get subject
        try {
            const response = await axiosAuthInstance().get(`/subjects/${id}`);
            setSubject(response.data);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getSubject();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Helmet>
                <title>Chi tiết môn học {subject?.name || ''} | {process.env.REACT_APP_NAME}</title>
            </Helmet>

            <div className="container mt-4">
                {/* ID */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            Mã MH:
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            {/* kiểm tra xem có student hok?. Nếu có thì lấy cái thuộc tính id ra */}
                            {subject?.id}
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
                            {subject?.name}
                        </div>
                    </div>
                </div>

                {/* number_of_credit */}
                <div className="row">
                    <div className="col-md-5">
                        <div className="form-group">
                            Số tín chỉ:
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form-group">
                            {subject?.number_of_credit}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
