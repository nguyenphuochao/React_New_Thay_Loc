import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout'
import ProtectedRouter from './ProtectedRouter'

// Page
import Home from '../page/Home'
import Product from '../page/Product'
import PaymentPolicy from '../page/PaymentPolicy'
import DeliveryPolicy from '../page/DeliveryPolicy'
import ReturnPolicy from '../page/ReturnPolicy'
import Contact from '../page/Contact'
import Account from '../page/Account'
import ProductDetail from '../page/ProductDetail'
import Order from '../page/Order'
import OrderDetail from '../page/OrderDetail'
import Checkout from '../page/Checkout'


export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Trang chủ */}
                    <Route path="" element={<Home />} />
                    {/* Sản phẩm */}
                    <Route path="/san-pham.html" element={<Product />} />
                    {/* Danh mục */}
                    <Route path="/danh-muc/:slug" element={<Product />} />
                    {/* Chính sách thanh toán */}
                    <Route path="/chinh-sach-thanh-toan.html" element={<PaymentPolicy />} />
                    {/* Chính sách giao hàng */}
                    <Route path="/chinh-sach-giao-hang.html" element={<DeliveryPolicy />} />
                    {/* Chính sách đổi trả */}
                    <Route path="/chinh-sach-doi-tra.html" element={<ReturnPolicy />} />
                    {/* Liên hệ */}
                    <Route path="/lien-he.html" element={<Contact />} />
                    {/* Chi tiết sản phẩm */}
                    <Route path="/san-pham/:slug" element={<ProductDetail />} />
                    {/* Thông tin tài khoản */}
                    <Route path="/thong-tin-tai-khoan.html" element={<ProtectedRouter><Account /></ProtectedRouter>} />
                    {/* Đơn hàng của tôi */}
                    <Route path="/don-hang-cua-toi.html" element={<ProtectedRouter><Order /></ProtectedRouter>} />
                    {/* Chi tiết đơn hàng */}
                    <Route path="/don-hang/:slug" element={<ProtectedRouter><OrderDetail /></ProtectedRouter>} />
                    {/* Đặt hàng */}
                    <Route path="/dat-hang.html" element={<ProtectedRouter><Checkout /></ProtectedRouter>} />
                </Route>
            </Routes>
        </>
    )
}
