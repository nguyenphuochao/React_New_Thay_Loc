import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

export function Create() {
    const navigate = useNavigate();
    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            name: '',
            number_of_credit: '',
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Vui lòng nhập tên môn học'),
            number_of_credit: Yup.number()
                .required('Vui lòng nhập số tin chỉ')
        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                console.log(values)
                // JSON.stringify là hàm chuyển object thành chuỗi dạng json
                const response = await axios.post('http://api_qlsvk99.com/api/v1/subjects', JSON.stringify(values));
                const name = response.data.name;
                toast.success(`Thêm môn học ${name} thành công`);
                navigate('/subject');
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    });
    return (
        <>
            <div>
                <Helmet>
                    <title>Thêm Môn Học</title>
                </Helmet>
                <h1>Thêm Môn Học</h1>
                <form action="#" method="POST" acceptCharset="utf-8" onSubmit={formik.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">

                                {/* Name */}
                                <div className="form-group">
                                    <label>Tên</label>
                                    <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="text" className="form-control" placeholder="Tên Môn Học Mới" name="name" />
                                    {
                                        formik.touched.name && formik.errors.name ?
                                            <div className='text-danger'>{formik.errors.name}</div> : null
                                    }
                                </div>

                                {/* number_of_credit */}
                                <div className="form-group">
                                    <label>Số tín chỉ</label>
                                    <input onChange={formik.handleChange} value={formik.values.number_of_credit} onBlur={formik.handleBlur} type="text" className="form-control" placeholder="Chỉ số tín chỉ" name="number_of_credit" />
                                    {
                                        formik.touched.number_of_credit && formik.errors.number_of_credit ?
                                            <div className='text-danger'>{formik.errors.number_of_credit}</div> : null
                                    }
                                </div>

                                {/* Action */}
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit">Lưu</button>
                                    <Link to='/subject' className="btn btn-warning ml-2">Quay về</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

