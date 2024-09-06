import React from 'react'
import ReactStars from "react-rating-stars-component";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { axiosNonAuthInstance } from '../helper/util';

export default function CommentForm({ handleSubmitComment }) {
    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            rating: 5,
            fullname: '',
            email: '',
            description: ''
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required('Vui lòng nhập họ và tên'),
            email: Yup.string()
                .required('Vui lòng nhập email'),
            description: Yup.string()
                .required('Vui lòng nhập nội dung')

        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                // console.log(values)
                handleSubmitComment(values);
            } catch (error) {
                toast.error(error.message);
            }
        }
    });

    return (
        <>
            <form className="form-comment" action='#' onSubmit={formik.handleSubmit}>
                <label>Đánh giá của bạn</label>
                <div className="form-group">
                    <ReactStars
                        count={5}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                        value={5}
                        onChange={(val) => formik.setFieldValue('rating', val)} />
                    <input type="text" className="form-control" name="fullname" placeholder="Tên *"
                        onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} />
                    {
                        formik.touched.fullname && formik.errors.fullname ?
                            <div className='text-danger'>{formik.errors.fullname}</div> : null
                    }
          
                    <input type="email" name="email" className="form-control" placeholder="Email *"
                        onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {
                        formik.touched.email && formik.errors.email ?
                            <div className='text-danger'>{formik.errors.email}</div> : null
                    }

                    <textarea name="description" id="input" className="form-control" rows={3} placeholder="Nội dung *"
                        onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} />
                    {
                        formik.touched.description && formik.errors.description ?
                            <div className='text-danger'>{formik.errors.description}</div> : null
                    }
                </div>

                <button type="submit" className="btn btn-primary">Gửi</button>

            </form>
        </>
    )
}
