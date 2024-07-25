import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
function Layout() {
    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
