import React from 'react'

export default function Header() {
  return (
    <>
      <div>
        <header>
          {/* use for ajax */}
          <input type="hidden" id="reference" defaultValue />
          {/* Top Navbar */}
          <div className="top-navbar container-fluid">
            <div className="menu-mb">
              <a href="javascript:void(0)" className="btn-close" onclick="closeMenuMobile()">×</a>
              <a className="active" href="index.html">Trang chủ</a>
              <a href="san-pham.html">Sản phẩm</a>
              <a href="chinh-sach-doi-tra.html">Chính sách đổi trả</a>
              <a href="chinh-sach-thanh-toan.html">Chính sách thanh toán</a>
              <a href="chinh-sach-giao-hang.html">Chính sách giao hàng</a>
              <a href="lien-he.html">Liên hệ</a>
            </div>
            <div className="row">
              <div className="hidden-lg hidden-md col-sm-2 col-xs-1">
                <span className="btn-menu-mb" onclick="openMenuMobile()"><i className="glyphicon glyphicon-menu-hamburger" /></span>
              </div>
              <div className="col-md-6 hidden-sm hidden-xs">
                <ul className="list-inline">
                  <li><a href="https://www.facebook.com/HocLapTrinhWebTaiNha.ThayLoc"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://twitter.com"><i className="fab fa-twitter" /></a></li>
                  <li><a href="https://www.instagram.com"><i className="fab fa-instagram" /></a></li>
                  <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest" /></a></li>
                  <li><a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a></li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-10 col-xs-11">
                <ul className="list-inline pull-right top-right">
                  <li className="account-login">
                    <a href="javascript:void(0)" className="btn-register">Đăng Ký</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="btn-login">Đăng Nhập</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End top navbar */}
          {/* Header */}
          <div className="container">
            <div className="row">
              {/* LOGO */}
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 logo">
                <a href="#"><img src="../images/goda450x170_1.jpg" className="img-responsive" /></a>
              </div>
              <div className="col-lg-4 col-md-4 hidden-sm hidden-xs call-action">
                <a href="#"><img src="../images/godakeben450x170.jpg" className="img-responsive" /></a>
              </div>
              {/* HOTLINE AND SERCH */}
              <div className="col-lg-4 col-md-4 hotline-search">
                <div>
                  <p className="hotline-phone"><span><strong>Hotline: </strong><a href="tel:0932.538.468">0932.538.468</a></span></p>
                  <p className="hotline-email"><span><strong>Email: </strong><a href="mailto:nguyenhuulocla2006@gmail.com">nguyenhuulocla2006@gmail.com</a></span></p>
                </div>
                <form className="header-form" action>
                  <div className="input-group">
                    <input type="search" className="form-control search" placeholder="Nhập từ khóa tìm kiếm" name="search" autoComplete="off" defaultValue />
                    <div className="input-group-btn">
                      <button className="btn bt-search bg-color" type="submit"><i className="fa fa-search" style={{ color: '#fff' }} />
                      </button>
                    </div>
                    <input type="hidden" name="c" defaultValue="product" />
                    <input type="hidden" name="a" defaultValue="list" />
                  </div>
                  <div className="search-result">
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End header */}
        </header>
        {/* NAVBAR DESKTOP*/}
        <nav className="navbar navbar-default desktop-menu">
          <div className="container">
            <ul className="nav navbar-nav navbar-left hidden-sm hidden-xs">
              <li className="active">
                <a href="index.html">Trang chủ</a>
              </li>
              <li><a href="san-pham.html">Sản phẩm </a></li>
              <li><a href="chinh-sach-doi-tra.html">Chính sách đổi trả</a></li>
              <li><a href="chinh-sach-thanh-toan.html">Chính sách thanh toán</a></li>
              <li><a href="chinh-sach-giao-hang.html">Chính sách giao hàng</a></li>
              <li><a href="lien-he.html">Liên hệ</a></li>
            </ul>
            <span className="hidden-lg hidden-md experience">Trải nghiệm cùng sản phẩm của Goda</span>
            <ul className="nav navbar-nav navbar-right">
              <li className="cart"><a href="javascript:void(0)" className="btn-cart-detail" title="Giỏ Hàng"><i className="fa fa-shopping-cart" /> <span className="number-total-product">6</span></a></li>
            </ul>
          </div>
        </nav>
      </div>

    </>
  )
}
