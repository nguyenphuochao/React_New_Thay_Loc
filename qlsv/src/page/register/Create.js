import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

export function Create() {
    const navigate = useNavigate();

    const [studentOptions, setStudentOptions] = useState([]);
    const [subjectOptions, setSubjectOptions] = useState([]);

    const getAllStudent = async () => {
        // call API Students
        try {
            const response = await axios.get('http://api_qlsvk99.com/api/v1/students?list=all');
            setStudentOptions(response.data.items);
        } catch (error) {
            toast.error(error.message);
        }
    }

    const getAllSubject = async () => {
        // call API Subjects
        try {
            const response = await axios.get('http://api_qlsvk99.com/api/v1/subjects?list=all');
            setSubjectOptions(response.data.items);
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getAllStudent();
        getAllSubject();
        // eslint-disable-next-line
    }, []);

    // validate form
    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            student_id: '',
            subject_id: ''
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            student_id: Yup.string()
                .required('Vui lòng chọn sinh viên'),
            subject_id: Yup.string()
                .required('Vui lòng chọn môn học')
        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                // console.log(values)
                // JSON.stringify là hàm chuyển object thành chuỗi dạng json
                const response = await axios.post('http://api_qlsvk99.com/api/v1/registers', JSON.stringify(values));
                const student_name = response.data.student_name;
                const subject_name = response.data.subject_name;
                toast.success(`Sinh viên ${student_name} đăng kí môn học ${subject_name} thành công`);
                navigate('/register');
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
                    <title>Thêm đăng kí môn học | {process.env.REACT_APP_NAME}</title>
                </Helmet>

                <h1>Thêm đăng ký môn học</h1>
                <form action="#" method="POST" onSubmit={formik.handleSubmit} >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">

                                {/* student_id */}
                                <div className="form-group">
                                    <label htmlFor="student_id">Tên sinh viên</label>
                                    <select className="form-control" name="student_id" id="student_id"
                                        onChange={formik.handleChange} value={formik.values.student_id} onBlur={formik.handleBlur}>
                                        <option value="">Vui lòng chọn sinh viên</option>

                                        {studentOptions.map((item, index) =>
                                            <option key={index} value={item.id}>{item.id} - {item.name}</option>
                                        )}

                                    </select>
                                    {
                                        formik.touched.student_id && formik.errors.student_id ?
                                            <div className='text-danger'>{formik.errors.student_id}</div> : null
                                    }
                                </div>

                                {/* subject_id */}
                                <div className="form-group">
                                    <label htmlFor="subject_id">Tên môn học</label>
                                    <span id="load" className="text-primary" />
                                    <select className="form-control" name="subject_id" id="subject_id"
                                        onChange={formik.handleChange} value={formik.values.subject_id} onBlur={formik.handleBlur}>
                                        <option value="">Vui lòng chọn môn học</option>

                                        {subjectOptions.map((item, index) =>
                                            <option key={index} value={item.id}>{item.id} - {item.name}</option>
                                        )}

                                    </select>
                                    {
                                        formik.touched.subject_id && formik.errors.subject_id ?
                                            <div className='text-danger'>{formik.errors.subject_id}</div> : null
                                    }
                                </div>

                                {/* actions */}
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit">Lưu</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
