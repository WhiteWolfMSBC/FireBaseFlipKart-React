import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import { Helmet } from 'react-helmet';




export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <div>

            <Helmet>
                <title>Flipkart | Add Product</title>
            </Helmet>

            <div className="Product-card container-xl container-lg container-md container-sm container-xs">

                {products.length !== 0}
                <div className='products-container'>
                    {products.length === 0 && <div>slow internet...no products to display</div>}
                    {products.map(product => (

                        <div className="card mt-4 ms-5" key={product.ProductID} style={{ width: "19rem" }}>
                            <div className="row">
                                <div className="col-xl-10"></div>
                                <div className="col-xl-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-heart text-danger"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                                    </svg>
                                </div>
                            </div>

                            <img
                                src={product.ProductImg}
                                alt="not found"
                                className="card-img-top mt-2"
                                width="302px"
                                height="437px"
                                style={{ width: "100%" }}
                            />
                            <div className="card-body">
                                <h6 className="card-title">{product.ProductName}</h6>

                                <div className="row">
                                    <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                                        <p
                                            class="badge bg-success text-wrap"
                                            style={{ width: "3rem" }}
                                        >
                                            4.7
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="icon icon-tabler icon-tabler-jewish-star text-light ms-1"
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="white"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                ></path>
                                                <path d="M12 2l3 5h6l-3 5l3 5h-6l-3 5l-3 -5h-6l3 -5l-3 -5h6z"></path>
                                            </svg>
                                        </p>
                                    </div>

                                    <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                                        <span className="card-text text-secondary fs-6 fw-semibold">
                                            (269)
                                        </span>
                                    </div>

                                    <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12">
                                        <span className="card-text">
                                            <img
                                                src={require("../Components/Images/19.png")}
                                                className="card-img-top"
                                                alt="..."
                                            />
                                        </span>
                                    </div>

                                    <div className="col-xl-3 col-lg-2 col-md-1 col-sm-12 col-xs-12"></div>
                                </div>

                                <p className="card-text text-dark fs-6 fw-semibold">
                                    ₹ {product.ProductPrice}.00

                                    <span className="card-text text-success fs-6 fw-semibold ms-2">
                                        5% off
                                    </span>
                                </p>
                                <p className="card-text text-dark fs-6 fw-semibold">
                                    Upto <span className="fw-bold">₹1,000</span> Off on Exchange
                                </p>



                                <button className='btn btn-primary mt-2 form-control' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>Add To Cart</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    )
}



