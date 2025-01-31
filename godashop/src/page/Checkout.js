import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { formatMoney } from '../helper/util';
import DeliveryInfo from '../component/DeliveryInfo';

export default function Checkout() {
    const cartItems = useSelector(state => state.CartReducer.cartItems);
    const subTotalPrice = cartItems.reduce((total, item) => total + Number(item.sale_price * item.qty), 0);
    const shippingFee = 50000; // gọi api lấy shippingFee
    const totalPrice = subTotalPrice + shippingFee;

    return (
        <>
            <main id="maincontent" className="page-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <ol className="breadcrumb">
                                <li><Link to="/" target="_self">Giỏ hàng</Link></li>
                                <li><span>/</span></li>
                                <li className="active"><span>Thông tin giao hàng</span></li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        {/* Cart */}
                        <aside className="col-md-6 cart-checkout">

                            {
                                cartItems.map((item) =>
                                    <>
                                        <div className="row">
                                            <div className="col-xs-2">
                                                <img className="img-responsive" src={item.featured_image} alt={item.name} />
                                            </div>
                                            <div className="col-xs-7">
                                                <a className="product-name" href="chi-tiet-san-pham.html">{item.name}</a>
                                                <br />
                                                <span>{item.qty}</span> x <span>{formatMoney(item.sale_price)}₫</span>
                                            </div>
                                            <div className="col-xs-3 text-right">
                                                <span>{formatMoney(item.sale_price * item.qty)}₫</span>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )
                            }

                            {/* Phần tiền */}
                            <div className="row">
                                <div className="col-xs-6">
                                    Tạm tính
                                </div>
                                <div className="col-xs-6 text-right">
                                    {formatMoney(subTotalPrice)}₫
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6">
                                    Phí vận chuyển
                                </div>
                                <div className="col-xs-6 text-right">
                                    <span className="shipping-fee">{formatMoney(shippingFee)}₫</span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-xs-6">
                                    Tổng cộng
                                </div>
                                <div className="col-xs-6 text-right">
                                    <span className="payment-total">{formatMoney(totalPrice)}₫</span>
                                </div>
                            </div>
                        </aside>

                        {/* Phần thông tin khách hàng */}
                        <DeliveryInfo />
                        
                    </div>
                </div>
            </main>
        </>
    )
}
