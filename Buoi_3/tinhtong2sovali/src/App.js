import React, { useState } from 'react'
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
function App() {
    const [sum, setSum] = useState(0);
    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            soA: '',
            soB: ''
        },
        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            soA: Yup.number()
                .typeError('Vui lòng nhập con số')
                .required('Vui lòng nhập số A'),
            soB: Yup.number()
                .typeError('Vui lòng nhập con số')
                .required('Vui lòng nhập số B')

        }),
        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: values => {
            console.log(values);
            setSum(Number(values.soA) + Number(values.soB));
        }
    });
    return (
        <form action='#' onSubmit={formik.handleSubmit}>
            <div className='container'>
                <div className='form-group'>
                    Số A: <input type='number' name='soA' className='form-control'
                        onChange={formik.handleChange} value={formik.values.soA} onBlur={formik.handleBlur} />
                    {
                        formik.touched.soA && formik.errors.soA ?
                            <div className='text-danger'>{formik.errors.soA}</div> : null
                    }
                </div>
                <div className='form-group'>
                    Số B: <input type='number' className='form-control'
                        name='soB' onChange={formik.handleChange} value={formik.values.soB} onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.soB && formik.errors.soB ?
                            <div className='text-danger'>{formik.errors.soB}</div> : null
                    }
                </div>
                <div className='form-group alert alert-success'>
                    {sum}
                </div>
                <div>
                    <button className='btn btn-primary'>Tính Tổng</button>
                </div>
            </div>
        </form>
    )
}

export default App
