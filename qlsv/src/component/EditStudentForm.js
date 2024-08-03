import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function EditStudentForm({ student, handleUpdate }) {

    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            name: student.name,
            birthday: student.birthday,
            gender: student.gender
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
                // console.log(values)
                handleUpdate(values);
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    });

    return (
        <>
            <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                <input type="hidden" name="id" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">

                            {/* Name */}
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

                            {/* Birthday */}
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

                            {/* Gender */}
                            <div className="form-group">
                                <label>Chọn Giới tính</label>
                                <select className="form-control" id="gender" name="gender"
                                    onChange={formik.handleChange} value={formik.values.gender} onBlur={formik.handleBlur}>
                                    <option value="">Chọn giới tính</option>    
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                    <option value="khác">Khác</option>
                                </select>
                                {
                                    formik.touched.gender && formik.errors.gender ?
                                        <div className='text-danger'>{formik.errors.gender}</div> : null
                                }
                            </div>

                            {/* Action */}
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Lưu</button>
                                <Link to="/" className="btn btn-warning ml-2">Quay về</Link>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}
