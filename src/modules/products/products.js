import React, {useEffect, useState} from 'react';
import {apiUrl} from "../../shared/api";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../shared/redux/actions/productListActions";

function Products() {
    const dispatch = useDispatch();
    const productListData = useSelector(state => state.productListReducer);
    useEffect(() => {
        dispatch(fetchProductList(productListData.categoryID));
    },[productListData.categoryID]);

    return (
        productListData.loading ? (<h2> Loading ... </h2>) :
            productListData.error ? (<h2> {productListData.error} </h2>) : (
                <div className="productList">
                    {productListData.products.map(product => (
                        <div className="product" id={product.id}>
                            <h1>{product.name}</h1>
                            <span>{product.price}</span>
                            <span>{product.category.name}</span>
                            <img src={apiUrl + product.image} alt=""/>
                        </div>
                    ))}
                </div>)
    );
}

export default Products;