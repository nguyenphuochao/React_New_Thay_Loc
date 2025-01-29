import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { axiosAuthInstance } from '../helper/util';
import { UPDATE_LOGGED_USER } from '../const/AuthConstant';
import { toast } from 'react-toastify';
import SidebarAccount from '../component/SidebarAccount';

export default function Account() {
    const dispatch = useDispatch();
    const loggedUser = useSelector(state => state.AuthReducer.loggedUser);

    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            fullname: loggedUser.name,
            mobile: loggedUser.mobile,
            current_password: '',
            password: '',
            re_password: ''
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required('Vui lòng nhập họ tên'),
            mobile: Yup.string()
                .required('Vui lòng nhập số điện thoại'),
            password: Yup.string()
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Phải thỏa mãn ít nhất 8 kí tự bao gồm số, ký tự, đặc biệt, chữ hoa, chữ thường'),
            re_password: Yup.string()
                .oneOf([Yup.ref('password')], 'Mật khẩu không trùng khớp')

        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            try {
                const response = await axiosAuthInstance().patch(`/customers/${loggedUser.id}/account`, JSON.stringify(values));
                const data = response.data;

                toast.success('Cập nhật thành công');

                const action = {
                    type: UPDATE_LOGGED_USER,
                    payload: {
                        loggedUser: data
                    }
                }

                dispatch(action);

            } catch (error) {
                // console.log(error.message);
                toast.error(error.message);
            }
        }
    });

    return (
        <>
            <main id="maincontent" className="page-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-9">
                            <ol className="breadcrumb">
                                <li><Link to="/" target="_self">Trang chủ</Link></li>
                                <li><span>/</span></li>
                                <li className="active"><span>Tài khoản</span></li>
                            </ol>
                        </div>
                        <div className="clearfix" />
                        <SidebarAccount />
                        <div className="col-md-9 account">
                            <div className="row">
                                <div className="col-xs-6">
                                    <h4 className="home-title">Thông tin tài khoản</h4>
                                </div>
                                <div className="clearfix" />
                                <div className="col-md-6">
                                    <form className="info-account" action="#" method="POST" onSubmit={formik.handleSubmit}>

                                        <div className="form-group">
                                            <input type="text" className="form-control" name="fullname" placeholder="Họ và tên"
                                                onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} />
                                            {
                                                formik.touched.fullname && formik.errors.fullname ?
                                                    <div className='text-danger'>{formik.errors.fullname}</div> : null
                                            }
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" className="form-control" name="mobile" placeholder="Số điện thoại"
                                                onChange={formik.handleChange} value={formik.values.mobile} onBlur={formik.handleBlur} />
                                            {
                                                formik.touched.mobile && formik.errors.mobile ?
                                                    <div className='text-danger'>{formik.errors.mobile}</div> : null
                                            }
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" name="current_password" placeholder="Mật khẩu hiện tại" />
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" placeholder="Mật khẩu mới"
                                                onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                            {
                                                formik.touched.password && formik.errors.password ?
                                                    <div className='text-danger'>{formik.errors.password}</div> : null
                                            }
                                        </div>

                                        <div className="form-group">
                                            <input type="password" className="form-control" name="re_password" placeholder="Nhập lại mật khẩu mới"
                                                onChange={formik.handleChange} value={formik.values.re_password} onBlur={formik.handleBlur} />
                                            {
                                                formik.touched.re_password && formik.errors.re_password ?
                                                    <div className='text-danger'>{formik.errors.re_password}</div> : null
                                            }
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary pull-right">Cập nhật</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
