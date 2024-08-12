import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // rule: useSelector(state => state): bước subcriber
    // render lại khi state( dc sinh ra từ bankReducer trong store ) thay đổi
    const isLogin = useSelector(state => state.isLogin);
    const loggedUser = useSelector(state => state.loggedUser);
    const handleLogout = () => {
        const action = { type: 'LOGOUT'};
        dispatch(action);
        navigate('/auth/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-2">
                <Link className="navbar-brand" href="#">Hệ thống quản lí sinh viên</Link>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            {isLogin ?
                                <Link className="nav-link" to="/user/profile">{loggedUser.name}</Link>
                                :
                                <Link className="nav-link" href="/auth/login">Login</Link>
                            }
                        </li>

                        <li className="nav-item">
                            {isLogin ?
                                <button className="btn btn-primary" onClick={(e) => handleLogout()}>Logout</button>
                                :
                                <Link className="nav-link" href="/auth/register">Register</Link>
                            }
                        </li>

                    </ul>
                </div>
            </nav>

            {isLogin ?
                <div>
                    <NavLink to="/" className="btn btn-info mr-3">Students</NavLink>
                    <NavLink to="/subject" className="btn btn-info mr-3">Subjects</NavLink>
                    <NavLink to="/register" className="btn btn-info mr-3">Registers</NavLink>
                </div>
                : null
            }

            <ToastContainer />

        </>
    )
}

export default Header
