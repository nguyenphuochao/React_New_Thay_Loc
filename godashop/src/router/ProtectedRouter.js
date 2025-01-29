import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouter({ children }) {
    const isLogin = useSelector(state => state.AuthReducer.isLogin);
    if (!isLogin) {
        // chưa login điều hướng về trang chủ
        return <Navigate to="/" />
    }
    
    return children;
}
