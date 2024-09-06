import React, { useEffect, useState } from 'react'
import ProductSlider from './ProductSlider'
import { axiosNonAuthInstance, formatMoney } from '../helper/util'
import DOMPurify from 'dompurify';
import RelatedProductSlider from './RelatedProductSlider';
import ReactStars from "react-rating-stars-component";
import CommentForm from './CommentForm';

export default function ProductInner({ product }) {

    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getComments = async () => {
        try {
            // call API get product comments
            const response = await axiosNonAuthInstance().get(`/products/${product.id}/comments`);
            setComments(response.data);
            setIsLoaded(true);
        } catch (error) {
            console.log(error.message);
            setIsLoaded(true);
        }
    }

    const handleSubmitComment = async (values) => {
        // console.log(values);
        // call API create comment
        await axiosNonAuthInstance().post(`/products/${product.id}/comments`, JSON.stringify(values));
        // load lại data getComments()
        getComments();
        setIsLoaded(true);
    }

    useEffect(() => {
        getComments();
        // eslint-disable-next-line 
    }, []);


    return (
        <>
            {/* product-info */}
            <div className="row product-info">
                <div className="col-md-6">
                    <ProductSlider product={product} />
                </div>
                <div className="col-md-6">
                    <h5 className="product-name">{product.name}</h5>
                    <div className="brand">
                        <span>Nhãn hàng: </span> <span>REDWIN</span>
                    </div>
                    <div className="product-status">
                        <span>Trạng thái: </span>
                        {
                            product.inventory_qty > 0 ?
                                <span className="label-success">Còn hàng</span> :
                                <span className="label-warning">Hết hàng</span>
                        }
                    </div>
                    <div className="product-item-price">
                        <span>Giá: </span>
                        {
                            product.price !== product.sale_price ?
                                <span className="product-item-regular">{formatMoney(product.price)}₫</span> :
                                null
                        }
                        <span className="product-item-discount">{formatMoney(product.sale_price)}₫</span>
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
                            <div role="tabpanel" className="tab-pane active" id="product-description"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}>
                                {/* {product.description} */}
                            </div>
                            <div role="tabpanel" className="tab-pane" id="product-comment">
                                { !isLoaded ? null : <CommentForm handleSubmitComment={handleSubmitComment} /> }
                                <div className="comment-list">
                                    {
                                        comments.map((comment, index) =>
                                            <>
                                                <hr />
                                                <span className="date pull-right">{comment.created_date}</span>
                                                <ReactStars
                                                    count={5}
                                                    edit={false}
                                                    size={24}
                                                    activeColor="#ffd700"
                                                    value={Number(comment.star)} />
                                                <span className="by">{comment.fullname}</span>
                                                <p>{comment.description}</p>
                                            </>
                                        )
                                    }
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
                    <RelatedProductSlider relatedProducts={product.relatedProducts} />
                </div>
            </div>
        </>
    )
}
