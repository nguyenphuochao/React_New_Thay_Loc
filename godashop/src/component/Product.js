import React from 'react'

export default function Product({ product }) {
    return (
        <>
            <div className="product-container">
                <div className="image">
                    <img className="img-responsive" src="../images/beaumoreSecretWhiteningCream10g.jpg" alt="" />
                </div>
                <div className="product-meta">
                    <h5 className="name">
                        <a className="product-name" href="chi-tiet-san-pham.html" title="Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream">Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream</a>
                    </h5>
                    <div className="product-item-price">
                        <span className="product-item-regular">200,000₫</span>
                        <span className="product-item-discount">190,000₫</span>
                    </div>
                </div>
                <div className="button-product-action clearfix">
                    <div className="cart icon">
                        <a className="btn btn-outline-inverse buy" product-id={2} href="!" title="Thêm vào giỏ">
                            Thêm vào giỏ <i className="fa fa-shopping-cart" />
                        </a>
                    </div>
                    <div className="quickview icon">
                        <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html" title="Xem nhanh">
                            Xem chi tiết <i className="fa fa-eye" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
