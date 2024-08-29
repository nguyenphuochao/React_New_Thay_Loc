import React, { useEffect, useState } from 'react'
import { axiosNonAuthInstance, getCategoryId, updateParam } from '../helper/util';
import ProductList from '../component/ProductList';
import Loading from '../component/Loading';
import CatSidebar from '../component/CatSidebar';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import PriceSidebar from '../component/PriceSidebar';

export default function Product() {

  const { slug } = useParams();
  const categoryId = getCategoryId(slug);

  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const priceRange = searchParams.get('price-range') || '';

  const getProducts = async () => {
    setIsLoaded(false); // reset lại trước khi call API
    try {
      // call API get products
      const response = await axiosNonAuthInstance().get(`/products?item_per_page=10&category_id=${categoryId}&price-range=${priceRange}`);
      setProducts(response.data.items);
      setIsLoaded(true);
    } catch (error) {
      console.log(error.message);
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getProducts();
  }, [categoryId, priceRange]);

  const handlePrice = (priceRange) => {
    const newParam = {
      'price-range': priceRange
    }
    updateParam(searchParams, setSearchParams, newParam);
  }

  return (
    <>
      <main id="maincontent" className="page-main">
        <div className="container">
          <div className="row">
            <div className="col-xs-9">
              <ol className="breadcrumb">
                <li><a href="/" target="_self">Trang chủ</a></li>
                <li><span>/</span></li>
                <li className="active"><span>Tất cả sản phẩm</span></li>
              </ol>
            </div>
            <div className="col-xs-3 hidden-lg hidden-md">
              <Link className="hidden-lg pull-right btn-aside-mobile" href="#">Bộ lọc <i className="fa fa-angle-double-right" /></Link>
            </div>
            <div className="clearfix" />
            <aside className="col-md-3">
              <div className="inner-aside">
                {/* Category sidebar */}
                <CatSidebar categoryId={categoryId} />
                {/* Price range sidebar */}
                <PriceSidebar handlePrice={handlePrice} priceRange={priceRange} />
              </div>
            </aside>
            <div className="col-md-9 products">
              <div className="row equal">
                <div className="col-xs-6">
                  <h4 className="home-title">Tất cả sản phẩm</h4>
                </div>
                <div className="col-xs-6 sort-by">
                  <div className="pull-right">
                    <label className="left hidden-xs" htmlFor="sort-select">Sắp xếp: </label>
                    <select id="sort-select">
                      <option value selected>Mặc định</option>
                      <option value="price-asc">Giá tăng dần</option>
                      <option value="price-desc">Giá giảm dần</option>
                      <option value="alpha-asc">Từ A-Z</option>
                      <option value="alpha-desc">Từ Z-A</option>
                      <option value="created-asc">Cũ đến mới</option>
                      <option value="created-desc">Mới đến cũ</option>
                    </select>
                  </div>
                </div>
                <div className="clearfix" />
                {
                  isLoaded ? <ProductList products={products} /> : <Loading />
                }
                {
                  products.length === 0 ? "Không có sản phẩm" : ""
                }
              </div>
              {/* Paging */}
              <ul className="pagination pull-right">
                <li className="active"><a href="javascript:void(0)" onclick="goToPage(1)">1</a></li>
                <li className><a href="javascript:void(0)" onclick="goToPage(2)">2</a></li>
                <li className><a href="javascript:void(0)" onclick="goToPage(3)">3</a></li>
                <li><a href="javascript:void(0)" onclick="goToPage(2)">»</a></li>
              </ul>
              {/* End paging */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
