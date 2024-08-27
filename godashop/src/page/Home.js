import React, { useEffect, useState } from 'react'
import ProductList from '../component/ProductList'
import { axiosNonAuthInstance } from '../helper/util';
import Loading from '../component/Loading';
import CategoriedProductList from '../component/CategoriedProductList';

export default function Home() {

  // featuredProducts
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isFeaturedLoaded, setIsFeaturedLoaded] = useState(false);

  // latestProducts
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLatestLoaded, setIsLatestLoaded] = useState(false);

  // categoriedProducts
  const [categoriedProducts, setCategoriedProducts] = useState([]);
  const [isCategoriedLoaded, setIsCategoriedLoaded] = useState(false);

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

  const getLatestProducts = async () => {
    try {
      // call API to get latest products
      const response = await axiosNonAuthInstance().get('/products?latest=1&item_per_page=4');
      setLatestProducts(response.data.items);
      setIsLatestLoaded(true);
    } catch (error) {
      console.log(error.message);
      setIsLatestLoaded(true);
    }
  }

  const getCategoriedProducts = async () => {
    try {
      // call API to get latest products
      const response = await axiosNonAuthInstance().get('/products?hierarchy=1&item_per_page=4');
      setCategoriedProducts(response.data);
      setIsCategoriedLoaded(true);
    } catch (error) {
      console.log(error.message);
      setIsCategoriedLoaded(true);
    }
  }

  // hàm này render 1 lần duy nhất đầu tiên
  useEffect(() => {
    getFeaturedProducts();
    getLatestProducts();
    getCategoriedProducts();
  }, [])


  return (
    <>
      <div>
        {/* SLIDESHOW */}
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
                <a className="item-inline" title="7 NGÀY ĐỔI TRẢ" href="!">
                  <span className="title-sv">7 NGÀY ĐỔI TRẢ</span>
                  <span>Chăm sóc khách hàng cực tốt</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 item item-2">
              <div className="item-inner">
                <a className="item-inline" title="MIỄN PHÍ SHIP" href="!">
                  <span className="title-sv">MIỄN PHÍ SHIP</span>
                  <span>Với dịch vụ giao hàng tiết kiệm</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 item item-3">
              <div className="item-inner">
                <a className="item-inline" title="BÁN BUÔN NHƯ BÁN SỈ" href="!">
                  <span className="title-sv">BÁN BUÔN NHƯ BÁN SỈ</span>
                  <span>Giá hợp lý nhất quả đất</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 item item-4">
              <div className="item-inner">
                <a className="item-inline" title="CHẤT LƯỢNG HÀNG ĐẦU" href="!">
                  <span className="title-sv">CHẤT LƯỢNG HÀNG ĐẦU</span>
                  <span>Chăm sóc bạn như người thân </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* END SERVICES */}

        {/* MAIN */}
        <main id="maincontent" className="page-main">
          <div className="container">
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Sản phẩm nổi bật</h4>
              </div>
              {/* featuredProducts */}
              {
                isFeaturedLoaded ? <ProductList products={featuredProducts} /> : <Loading />
              }
            </div>
            <div className="row equal">
              <div className="col-xs-12">
                <h4 className="home-title">Sản phẩm mới nhất</h4>
              </div>
              {/* latestProducts */}
              {
                isLatestLoaded ? <ProductList products={latestProducts} /> : <Loading />
              }
            </div>
            {/* categoriedProducts */}
            {
              isCategoriedLoaded ? <CategoriedProductList categoriedProducts={categoriedProducts} /> : <Loading />
            }
          </div>
        </main>
        {/* END MAIN */}
      </div>
    </>
  )
}