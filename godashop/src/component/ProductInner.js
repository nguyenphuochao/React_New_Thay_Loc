import React from 'react'
import ProductSlider from './ProductSlider'

export default function ProductInner({ product }) {
    return (
        <>
            {/* product-info */}
            <div className="row product-info">
                <div className="col-md-6">
                    <ProductSlider product={product} />
                </div>
                <div className="col-md-6">
                    <h5 className="product-name">Kem làm sáng vùng da bikini Beaumore- 50ml</h5>
                    <div className="brand">
                        <span>Nhãn hàng: </span> <span>REDWIN</span>
                    </div>
                    <div className="product-status">
                        <span>Trạng thái: </span>
                        <span className="label-warning">Hết hàng</span>
                    </div>
                    <div className="product-item-price">
                        <span>Giá: </span>
                        <span className="product-item-discount">849,000₫</span>
                    </div>
                </div>
            </div>
            {/* product-description */}
            <div className="row product-description">
                <div className="col-xs-12">
                    <div role="tabpanel">
                        {/* Nav tabs */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a href="#product-description" aria-controls="home" role="tab" data-toggle="tab">Mô tả</a>
                            </li>
                            <li role="presentation">
                                <a href="#product-comment" aria-controls="tab" role="tab" data-toggle="tab">Đánh giá</a>
                            </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="product-description">
                                <p>Mô tả chi tiết</p>
                                <p>– Với chiết từ lá dâu tằm, chất Arbutin trong quả dâu gấu cùng các thành phần thảo dược thiên nhiên giúp tăng cường hàng rào biểu bì, ngăn ngừa lão hóa da</p>
                                <p>– Làm da trắng sáng, giữ ẩm và tăng độ đàn hồi cho da</p>
                                <p>– Diệt khuẩn, kháng viêm, làm mịn và sáng vùng bikini</p>
                                <p>– Tăng cường hàng rào biểu bì, giữ ẩm, ngăn ngừa lão hóa da</p>
                                <p>– Tăng dộ đàn hồi cho da, mang lại vẻ sáng và mềm mại cho da</p>
                                <p>– Làm sáng da bằng cách ức chế sự hình thành của Melanin</p>
                                <p>– Chăm sóc da bị kích ứng và tấy đỏ, chống bong tróc. Giúp làm giảm các ban đỏ gây ra bởi tia UV cháy nắng.</p>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="product-comment">
                                <form className="form-comment" action method="POST">
                                    <label>Đánh giá của bạn</label>
                                    <div className="form-group">
                                        <input type="hidden" name="product_id" defaultValue={3} />
                                        <input className="rating-input" name="rating" type="text" title defaultValue={4} />
                                        <input type="text" className="form-control" id name="fullname" placeholder="Tên *" required />
                                        <input type="email" name="email" className="form-control" id placeholder="Email *" required />
                                        <textarea name="description" id="input" className="form-control" rows={3} required placeholder="Nội dung *" defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Gửi</button>
                                </form>
                                <div className="comment-list">
                                    <hr />
                                    <span className="date pull-right">2019-11-29 16:11:07</span>
                                    <input className="answered-rating-input" name="rating" type="text" title defaultValue={4} readOnly />
                                    <span className="by">abc</span>
                                    <p>test</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product-related */}
            <div className="row product-related equal">
                <div className="col-md-12">
                    <h4 className="text-center">Sản phẩm liên quan</h4>
                    <div className="owl-carousel owl-theme">

                        <div className="item thumbnail">
                            <div className="product-container">
                                <div className="image">
                                    <img className="img-responsive" src="../images/kemLuaLamDepDaBeaumore.jpg" alt="" />
                                </div>
                                <div className="product-meta">
                                    <h5 className="name">
                                        <a className="product-name" href="chi-tiet-san-pham.html" title="Kem lụa làm đẹp da Beaumore- 30ml">Kem lụa làm đẹp da Beaumore- 30ml</a>
                                    </h5>
                                    <div className="product-item-price">
                                        <span className="product-item-discount">1,500,000₫</span>
                                    </div>
                                </div>
                                <div className="button-product-action clearfix">
                                    <div className="cart icon">
                                        <a className="btn btn-outline-inverse buy" product-id={5} href="!" title="Thêm vào giỏ">
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
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
