import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../component/Layout'
import Home from '../page/Home'
import Product from '../page/Product'
import PaymentPolicy from '../page/PaymentPolicy'
import DeliveryPolicy from '../page/DeliveryPolicy'
import ReturnPolicy from '../page/ReturnPolicy'
import Contact from '../page/Contact'
import ProductDetail from '../page/ProductDetail'


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
                </Route>
            </Routes>
        </>
    )
}
