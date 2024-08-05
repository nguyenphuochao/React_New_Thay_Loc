import { useFormik } from 'formik';
import React from 'react'
import { toast } from 'react-toastify';
import * as Yup from 'yup';

export default function EditRegisterForm({ register, handleUpdate }) {

    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            score: register.score || ''
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            score: Yup.number()
                .required('Vui lòng nhập điểm')
                .min(0, 'Điểm không được nhỏ hơn 0')
                .max(10, 'Điểm không được lớn hơn 10')
        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                handleUpdate(values);
            } catch (error) {
                toast.error(error.message);
            }
        }
    });

    return (
        <>
            <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">

                            {/* student_name */}
                            <div className="form-group">
                                <label>Tên sinh viên : </label>
                                <span>{register.student_name}</span>
                            </div>

                            {/* subject_name */}
                            <div className="form-group">
                                <label>Tên môn học : </label>
                                <span>{register.subject_name}</span>
                            </div>

                            {/* scrore */}
                            <div className="form-group">
                                <label htmlFor="score">Điểm</label>
                                <input type="text" name="score" id="score"
                                    onChange={formik.handleChange} value={formik.values.score} onBlur={formik.handleBlur}
                                />
                                {
                                    formik.touched.score && formik.errors.score ?
                                        <div className='text-danger'>{formik.errors.score}</div> : null
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
        </>
    )
}
