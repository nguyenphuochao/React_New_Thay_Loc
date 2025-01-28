import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { POPUP_CLOSE, POPUP_FORGOT_PASS } from '../const/PopupConstant';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { axiosNonAuthInstance } from '../helper/util';
import { LOGIN } from '../const/AuthConstant';

export default function LoginForm() {
    const popup_type = useSelector(state => state.PopupReducer.popup_type);
    // console.log(popup_type);
    const fade = popup_type === 'POPUP_LOGIN' ? '' : 'fade';
    const display = popup_type === 'POPUP_LOGIN' ? 'block' : 'none';

    const dispatch = useDispatch();

    const handleClosePopup = () => {
        const action = { type: POPUP_CLOSE }
        dispatch(action);
    }

    const handleForgotPassPopup = () => {
        const action = { type: POPUP_FORGOT_PASS }
        dispatch(action);
    }

    // Submit form
    const formik = useFormik({
        // khởi tạo giá trị ban đầu
        initialValues: {
            // Dựa vào name của thẻ input
            email: '',
            password: '',
        },

        // Kiểm tra dữ liệu
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Vui lòng nhập email'),
            password: Yup.string()
                .required('Vui lòng nhập password'),
        }),

        // Khi dữ liệu hợp lệ sẽ chạy code onSubmit
        onSubmit: async values => {
            // Đóng popup
            handleClosePopup();
            try {
                // console.log(values)
                // call API để login
                const response = await axiosNonAuthInstance().post('/login', JSON.stringify(values));
                const data = response.data;
                // console.log(data);
                toast.success('Login thành công');
                // dispatch action bao gồm access token và thông tin user lên store
                const action = {
                    type: LOGIN,
                    payload: {
                        access_token: data.access_token,
                        loggedUser: data.user
                    }
                }

                dispatch(action);
            } catch (error) {
                toast.error(error?.response?.data || error.message);
            }
        }
    });

    return (
        <>
            <div className={'modal ' + fade} id="modal-login" role="dialog" style={{ display: display }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button type="button" onClick={() => handleClosePopup()} className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h3 className="modal-title text-center">Đăng nhập</h3>
                            {/* Google login */}
                            <br />
                            <div className="text-center">
                                <Link className="btn btn-primary google-login" to="#"><i className="fab fa-google" /> Đăng nhập bằng Google</Link>
                                {/* Facebook login */}
                                <Link className="btn btn-primary facebook-login" to="#"><i className="fab fa-facebook-f" /> Đăng nhập bằng Facebook</Link>
                            </div>
                        </div>
                        <form action="#" method="POST" onSubmit={formik.handleSubmit}>
                            <div className="modal-body">

                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email"
                                        onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                                    {
                                        formik.touched.email && formik.errors.email ?
                                            <div className='text-danger'>{formik.errors.email}</div> : null
                                    }
                                </div>

                                <div className="form-group">
                                    <input type="text" name="password" className="form-control" placeholder="Mật khẩu"
                                        onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                                    {
                                        formik.touched.password && formik.errors.password ?
                                            <div className='text-danger'>{formik.errors.password}</div> : null
                                    }
                                </div>

                                <input type="hidden" name="reference" defaultValue />

                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Đăng Nhập</button><br />
                                <div className="text-left">
                                    <Link to="#" className="btn-register">Bạn chưa là thành viên? Đăng kí ngay!</Link>
                                    <Link to="#" onClick={() => handleForgotPassPopup()} className="btn-forgot-password">Quên Mật Khẩu?</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
