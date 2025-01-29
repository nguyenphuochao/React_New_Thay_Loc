import React from 'react'
import { Link } from 'react-router-dom'
import { createLinkOrderDetail, createLinkProduct } from '../helper/util'

export default function OrderList({ orders }) {
    return (
        <>
            {
                orders.map((order, index) =>
                    <div key={index} className="row">
                        <div className="col-md-12">
                            <h5>Đơn hàng <Link to={createLinkOrderDetail(order)}>#{order.id}</Link></h5>
                            <span className="date">
                                Đặt hàng ngày {order.created_date}
                            </span>
                            <hr />

                            {
                                order.order_items.map((order_item, index_item) =>
                                    <div key={index_item} className="row">
                                        <div className="col-md-2">
                                            <img src={order_item.product.featured_image} alt="" className="img-responsive" />
                                        </div>
                                        <div className="col-md-3">
                                            <Link className="product-name" to={createLinkProduct(order_item.product)} >{order_item.product.name}</Link>
                                        </div>
                                        <div className="col-md-2">
                                            Số lượng: {order_item.qty}
                                        </div>
                                        <div className="col-md-2">
                                            {order.status_description}
                                        </div>
                                        <div className="col-md-3">
                                            Giao hàng ngày {order.delivered_date}
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                )
            }

        </>
    )
}
