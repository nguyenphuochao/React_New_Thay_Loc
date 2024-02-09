import React from 'react'
import { Helmet } from "react-helmet";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function Create() {
    const navigate = useNavigate();
    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            name: '',
            birthday: '',
            gender: ''
        },
        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Vui lòng nhập họ và tên'),
            birthday: Yup.string()
                .required('Vui lòng nhập ngày sinh'),
            gender: Yup.string()
                .required('Vui lòng chọn giới tính')

        }),
        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                // JSON.stringify là hàm chuyển object thành chuỗi dạng json
                // Trong laravel đã chuyển thành JSON rồi nên chỉ cần truyền vào values hoy
                const response = await axios.post('http://localhost/api_qlsv/api/students', values);
                const name = response.data.data.name;
                toast.success(`Thêm thành công sinh viên ${name}`);
                navigate('/');
            } catch (error) {
                console.log(error);
                toast.error(error.response.data.errors.name[0]);
            }
        }
    });
    return (
        <>
            <div>
                <Helmet>
                    <title>Thêm sinh viên</title>
                </Helmet>
                <h1>Thêm sinh viên</h1>
                <form action="#" onSubmit={formik.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Tên</label>
                                    <input type="text" className="form-control" placeholder="Tên của bạn" name="name"
                                        onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.touched.name && formik.errors.name ?
                                            <div className='text-danger'>{formik.errors.name}</div> : null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Birthday</label>
                                    <input type="date" className="form-control" placeholder="Ngày sinh của bạn" name="birthday"
                                        onChange={formik.handleChange} value={formik.values.birthday} onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.touched.birthday && formik.errors.birthday ?
                                            <div className='text-danger'>{formik.errors.birthday}</div> : null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Chọn Giới tính</label>
                                    <select className="form-control" id="gender" name="gender"
                                        onChange={formik.handleChange} value={formik.values.gender} onBlur={formik.handleBlur}>
                                        <option value="">Vui lòng chọn</option>
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                    {
                                        formik.touched.gender && formik.errors.gender ?
                                            <div className='text-danger'>{formik.errors.gender}</div> : null
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-success" type="submit">Lưu</button>
                                    <NavLink to="/" className="btn btn-warning ml-2">Quay về</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Create
