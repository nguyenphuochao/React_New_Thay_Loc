import React, { useEffect, useState } from 'react'
import CatSidebar from '../component/CatSidebar'
import PriceSidebar from '../component/PriceSidebar'
import { axiosNonAuthInstance } from '../helper/util';
import { Link, useParams } from 'react-router-dom';
import ProductInner from '../component/ProductInner';
import Loading from '../component/Loading';

export default function ProductDetail() {
    const priceRange = '';
    const handlePrice = (priceRange) => {
        // update later
    }
    const [product, setProduct] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { slug } = useParams();
    const partSlug = slug.split('-');
    const productId = partSlug.pop();

    const getProduct = async () => {
        try {
            // call API get product
            const response = await axiosNonAuthInstance().get(`/products/${productId}`);
            setProduct(response.data);
            setIsLoaded(true);
        } catch (error) {
            console.log(error.message);
            setIsLoaded(true);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <main id="maincontent" className="page-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-9">
                            <ol className="breadcrumb">
                                <li><Link to="/" target="_self">Trang chủ</Link></li>
                                <li><span>/</span></li>
                                <li className="active"><span>{product.name}</span></li>
                            </ol>
                        </div>
                        <div className="col-xs-3 hidden-lg hidden-md">
                            <a className="hidden-lg pull-right btn-aside-mobile" href="!">Bộ lọc <i className="fa fa-angle-double-right" /></a>
                        </div>
                        <div className="clearfix" />
                        <aside className="col-md-3">
                            <div className="inner-aside">
                                {/* Category sidebar */}
                                <CatSidebar />
                                {/* Price range sidebar */}
                                <PriceSidebar handlePrice={handlePrice} priceRange={priceRange} />
                            </div>
                        </aside>
                        <div className="col-md-9 product-detail">
                            {
                                isLoaded ? <ProductInner product={product} /> : <Loading />
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
