import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function EditSubjectForm({ subject, handleUpdate }) {

    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            name: subject.name,
            number_of_credit: subject.number_of_credit
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Vui lòng nhập tên môn học'),
            number_of_credit: Yup.number()
                .required('Vui lòng nhập số tín chỉ')
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
            <form action="#" method="POST" acceptCharset="utf-8" onSubmit={formik.handleSubmit}>
                <div className="container">
                    <div className="row">
                        <input type="hidden" name="id" defaultValue={3} />
                        <div className="col-md-5">

                            {/* name */}
                            <div className="form-group">
                                <label>Tên</label>
                                <input type="text" className="form-control" placeholder="Tên của bạn" name="name"
                                    onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                                {
                                    formik.touched.name && formik.errors.name ?
                                        <div className='text-danger'>{formik.errors.name}</div> : null
                                }
                            </div>

                            {/* number_of_credit */}
                            <div className="form-group">
                                <label>Số tín chỉ</label>
                                <input type="text" className="form-control" placeholder="Số tín chỉ" name="number_of_credit"
                                    onChange={formik.handleChange} value={formik.values.number_of_credit} onBlur={formik.handleBlur} />
                                {
                                    formik.touched.number_of_credit && formik.errors.number_of_credit ?
                                        <div className='text-danger'>{formik.errors.number_of_credit}</div> : null
                                }
                            </div>

                            {/* actions */}
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Lưu</button>
                                <Link to="/subject" className="btn btn-warning ml-2">Quay về</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
