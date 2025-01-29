import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { POPUP_CLOSE } from '../const/PopupConstant';
import { Link } from 'react-router-dom';

export default function Cart() {
    const dispatch = useDispatch();

    const popup_type = useSelector(state => state.PopupReducer.popup_type);
    const cartItems = useSelector(state => state.CartReducer.cartItems);

    const fade = popup_type === 'POPUP_CART' ? '' : 'fade';
    const display = popup_type === 'POPUP_CART' ? 'block' : 'none';

    const handleClosePopup = () => {
        const action = { type: POPUP_CLOSE }
        dispatch(action);
    }

    return (
        <>
            <div className={'modal ' + fade} id="modal-cart-detail" style={{ display: display }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-color">
                            <button onClick={() => handleClosePopup()} type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
                            <h3 className="modal-title text-center">Giỏ hàng</h3>
                        </div>
                        <div className="modal-body">
                            <div className="page-content">
                                <div className="clearfix hidden-sm hidden-xs">
                                    <div className="col-xs-1">
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="header">
                                            Sản phẩm
                                        </div>
                                    </div>
                                    <div className="col-xs-2">
                                        <div className="header">
                                            Đơn giá
                                        </div>
                                    </div>
                                    <div className="label_item col-xs-3">
                                        <div className="header">
                                            Số lượng
                                        </div>
                                    </div>
                                    <div className="col-xs-2">
                                        <div className="header">
                                            Thành tiền
                                        </div>
                                    </div>
                                    <div className="lcol-xs-1">
                                    </div>
                                </div>
                                <div className="cart-product">

                                    {
                                        cartItems.map(item =>
                                            <>
                                                <hr />
                                                <div className="clearfix text-left">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-md-1">
                                                            <div><img className="img-responsive" src={item.featured_image} alt={item.name} /></div>
                                                        </div>
                                                        <div className="col-sm-6 col-md-3"><Link className="product-name" to="#">{item.name}</Link></div>
                                                        <div className="col-sm-6 col-md-2"><span className="product-item-discount">{item.sale_price}₫</span></div>
                                                        <div className="col-sm-6 col-md-3"><input type="hidden" defaultValue={1} /><input type="number" onchange="updateProductInCart(this,2)" min={1} defaultValue={item.qty} /></div>
                                                        <div className="col-sm-6 col-md-2"><span>190,000₫</span></div>
                                                        <div className="col-sm-6 col-md-1"><Link className="remove-product" to="#" onclick="deleteProductInCart(2)"><span className="glyphicon glyphicon-trash" /></Link></div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="clearfix">
                                <div className="col-xs-12 text-right">
                                    <p>
                                        <span>Tổng tiền</span>
                                        <span className="price-total">1,230,000₫</span>
                                    </p>
                                    <input type="button" name="back-shopping" className="btn btn-default" defaultValue="Tiếp tục mua sắm" />
                                    <input type="button" name="checkout" className="btn btn-primary" defaultValue="Đặt hàng" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
