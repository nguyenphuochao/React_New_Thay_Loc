import React, { useEffect, useState } from 'react'
import ProductList from '../component/ProductList'
import { axiosNonAuthInstance } from '../helper/util';

export default function Home() {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isFeaturedLoaded, setIsFeaturedLoaded] = useState(false);
  const getFeaturedProducts = async () => {
    try {
      // call API to get featured products
      const response = await axiosNonAuthInstance().get('/products?featured=1&item_per_page=4');
      setFeaturedProducts(response.data.items);
      setIsFeaturedLoaded(true);
    } catch (error) {
      console.log(error.message);
      setIsFeaturedLoaded(true);
    }
  }

  useEffect(() => {
    getFeaturedProducts();
  }, [])


  return (
    <>
      <div>
        <div className="slideshow container-fluid">
          <div className="row">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} className />
                <li data-target="#myCarousel" data-slide-to={2} className />
              </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <img src="../images/slider1.jpg" alt="slider 1" />
                </div>
                <div className="item">
                  <img src="../images/slider_2.jpg" alt="slider 2" />
                </div>
                <div className="item">
                  <img src="../images/slider_3.jpg" alt="slider 3" />
                </div>
              </div>
              {/* Left and right controls */}
              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        {/* END SLIDESHOW */}
        {/* SERVICES */}
        <div className="top-services container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 item item-1">
              <div className="item-inner">
                <a className="item-inline" title="7 NGÀY ĐỔI TRẢ" href="#">
                  <span className="title-sv">7 NGÀY ĐỔI TRẢ</span>
                  <span>Chăm sóc khách hàng cực tốt</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 item item-2">
              <div className="item-inner">
                <a className="item-inline" title="MIỄN PHÍ SHIP" href="#">
                  <span className="title-sv">MIỄN PHÍ SHIP</span>
                  <span>Với dịch vụ giao hàng tiết kiệm</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 item item-3">
              <div className="item-inner">
                <a className="item-inline" title="BÁN BUÔN NHƯ BÁN SỈ" href="#">
                  <span className="title-sv">BÁN BUÔN NHƯ BÁN SỈ</span>
                  <span>Giá hợp lý nhất quả đất</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 item item-4">
              <div className="item-inner">
                <a className="item-inline" title="CHẤT LƯỢNG HÀNG ĐẦU" href="#">
                  <span className="title-sv">CHẤT LƯỢNG HÀNG ĐẦU</span>
                  <span>Chăm sóc bạn như người thân </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <main id="maincontent" className="page-main">
          <div className="container">
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Sản phẩm nổi bật</h4>
              </div>
              <ProductList products={[1, 2, 3, 4]} />
            </div>
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Sản phẩm mới nhất</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/beaumoreSecretWhiteningCream10g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream">Kem làm trắng da 5 trong 1
                        Beaumore Secret Whitening Cream</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-regular">200,000₫</span>
                      <span className="product-item-discount">190,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={2} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/beaumoreContourEyeCream.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem dưỡng da vùng mắt Beaumore Contour Eye Cream- 10g">Kem dưỡng da vùng mắt Beaumore Contour
                        Eye Cream- 10g</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">300,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={14} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemLamSangVungDaBikini.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm sáng vùng da bikini Beaumore- 50ml">Kem làm sáng vùng da bikini Beaumore- 50ml</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">849,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="quickview icon">
                      <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html" title="Xem nhanh">
                        Xem chi tiết <i className="fa fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/suaTamSandrasShowerGel.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html" title="Sữa tắm Sandras Shower Gel">Sữa tắm
                        Sandras Shower Gel</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">180,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={7} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Kem Chống Nắng</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemChongNangBeaumore4in1.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm trắng bảo vệ da chống nắng dùng làm kem nền khi trang điểm Beaumore 4 in 1 Cream- 40ml">Kem
                        làm trắng bảo vệ da chống nắng dùng làm kem nền khi trang điểm Beaumore 4 in 1 Cream- 40ml</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">604,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={12} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemChongNangSunDefense80ml.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html3" title="Kem chống nắng Beaumore - 80ml - giá sỉ​, giá tốt
                                  Kem chống nắng Beaumore - 80ml">Kem chống nắng Beaumore - 80ml - giá sỉ​, giá tốt
                        Kem chống nắng Beaumore - 80ml</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">249,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={23} href="javascript:void(0)"
                        title="Thêm vào giỏ">
                        Thêm vào giỏ <i className="fa fa-shopping-cart" />
                      </a>
                    </div>
                    <div className="quickview icon">
                      <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html3" title="Xem nhanh">
                        Xem chi tiết <i className="fa fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Kem Dưỡng Da</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/beaumoreContourEyeCream.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem dưỡng da vùng mắt Beaumore Contour Eye Cream- 10g">Kem dưỡng da vùng mắt Beaumore Contour
                        Eye Cream- 10g</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">300,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={14} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemLamSangVungDaBikini.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm sáng vùng da bikini Beaumore- 50ml">Kem làm sáng vùng da bikini Beaumore- 50ml</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">849,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="quickview icon">
                      <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html" title="Xem nhanh">
                        Xem chi tiết <i className="fa fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/suaTamSandrasShowerGel.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html" title="Sữa tắm Sandras Shower Gel">Sữa tắm
                        Sandras Shower Gel</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">180,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={7} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/nhamSamSandrasBeauty20g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm trắng da và mờ nếp nhăn từ Nhân sâm Sandras Beauty- 20g ">Kem làm trắng da và mờ nếp
                        nhăn từ Nhân sâm Sandras Beauty- 20g </a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">380,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={13} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Kem Trị Mụn</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemTriMunNghePureTurmeric20g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html5"
                        title="Kem trị mụn nghệ Nhật Beaumore Pure Turmeric Cream (Mới)- 20g ">Kem trị mụn nghệ Nhật
                        Beaumore Pure Turmeric Cream (Mới)- 20g </a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">239,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={25} href="javascript:void(0)"
                        title="Thêm vào giỏ">
                        Thêm vào giỏ <i className="fa fa-shopping-cart" />
                      </a>
                    </div>
                    <div className="quickview icon">
                      <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html5" title="Xem nhanh">
                        Xem chi tiết <i className="fa fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Kem Trị Thâm Nám</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/beaumoreSecretWhiteningCream10g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm trắng da 5 trong 1 Beaumore Secret Whitening Cream">Kem làm trắng da 5 trong 1
                        Beaumore Secret Whitening Cream</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-regular">200,000₫</span>
                      <span className="product-item-discount">190,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={2} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemPhaiNamVaTanNhanBeaumore.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm phai vết nám và tàn nhang Beaumore- 15g">Kem làm phai vết nám và tàn nhang Beaumore-
                        15g</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">249,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={16} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemTrangDaHoPhachBeaumore30g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm trắng da ngăn ngừa nám và tàn nhang từ hổ phách Beaumore- 30g">Kem làm trắng da ngăn
                        ngừa nám và tàn nhang từ hổ phách Beaumore- 30g</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">520,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={15} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/kemLamMoNamNgayDemDoiMy.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Kem làm mờ nám Ngày Đêm Nám đôi Mỹ Beaumore- 10g x 2 hũ">Kem làm mờ nám Ngày Đêm Nám đôi Mỹ
                        Beaumore- 10g x 2 hũ</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">901,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={19} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Sữa Rửa Mặt</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/suaRuaMatHatMo120g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html4"
                        title="Sữa rửa mặt hạt mơ Beaumore- 120g ">Sữa rửa mặt hạt mơ Beaumore- 120g </a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">180,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={24} href="javascript:void(0)"
                        title="Thêm vào giỏ">
                        Thêm vào giỏ <i className="fa fa-shopping-cart" />
                      </a>
                    </div>
                    <div className="quickview icon">
                      <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html4" title="Xem nhanh">
                        Xem chi tiết <i className="fa fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/suaRuaMatNgheBeaumore100g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Sữa rửa mặt nghệ Beaumore Mới- 100g">Sữa rửa mặt nghệ Beaumore Mới- 100g</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">250,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={4} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/suaRuamatHAAmino75g.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html2"
                        title="Sữa rửa mặt HA Amino Beaumore- 75g">Sữa rửa mặt HA Amino Beaumore- 75g</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">520,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={22} href="javascript:void(0)"
                        title="Thêm vào giỏ">
                        Thêm vào giỏ <i className="fa fa-shopping-cart" />
                      </a>
                    </div>
                    <div className="quickview icon">
                      <a className="btn btn-outline-inverse" href="chi-tiet-san-pham.html2" title="Xem nhanh">
                        Xem chi tiết <i className="fa fa-eye" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Sữa Tắm</h4>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/suaTamSandrasMychai250ml.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html" title="Sữa tắm Sandras Mỹ chai 250ml">Sữa
                        tắm Sandras Mỹ chai 250ml</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">210,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={9} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
              <div className="col-xs-6 col-sm-3">
                <div className="product-container">
                  <div className="image">
                    <img className="img-responsive" src="../images/aromaWhiteMaximumBeaumore250ml.jpg" alt />
                  </div>
                  <div className="product-meta">
                    <h5 className="name">
                      <a className="product-name" href="chi-tiet-san-pham.html"
                        title="Sữa tắm trắng Aroma White Maximum Beaumore- 250ml">Sữa tắm trắng Aroma White Maximum
                        Beaumore- 250ml</a>
                    </h5>
                    <div className="product-item-price">
                      <span className="product-item-discount">180,000₫</span>
                    </div>
                  </div>
                  <div className="button-product-action clearfix">
                    <div className="cart icon">
                      <a className="btn btn-outline-inverse buy" product-id={17} href="javascript:void(0)"
                        title="Thêm vào giỏ">
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
        </main>
      </div>

    </>
  )
}