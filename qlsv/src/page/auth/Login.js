import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { axiosNonAuthInstance } from '../../helper/util';

export default function Login() {

    const dispatch = useDispatch();

    const navigat = useNavigate();

    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            email: '',
            password: ''
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Vui lòng nhập email'),
            password: Yup.string()
                .required('Vui lòng nhập password')
        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                const response = await axiosNonAuthInstance().post('/login',JSON.stringify(values));
                const action = {
                    type: 'LOGIN_SUCCESS', // thuộc tính type là phải có (qui định của redux)
                    // data gủi đi, người ta hay dùng payload
                    payload : {
                        access_token: response.data.access_token,
                        loggedUser: response.data.user
                    }
                }
                dispatch(action);
                navigat('/');
            } catch (error) {
                toast.error(error.message);
            }
        }
    });

    return (
        <>
            <form action='#' onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {
                        formik.touched.email && formik.errors.email ?
                            <div className='text-danger'>{formik.errors.email}</div> : null
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {
                        formik.touched.password && formik.errors.password ?
                            <div className='text-danger'>{formik.errors.password}</div> : null
                    }
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form>

        </>
    )
}
