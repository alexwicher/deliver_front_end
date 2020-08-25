import React, {useEffect} from 'react';
import {apiUrl} from "../../shared/api";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../shared/redux/actions/productListActions";

function Products() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductList());
    },[]);
    const productListData = useSelector(state => state.productListReducer);
    return (
        productListData.loading ? (<h2> Loading ... </h2>) :
            productListData.error ? (<h2> {productListData.error} </h2>) : (
                <div>
                    {productListData.products.map(product => (
                        <div>
                            <h1>{product.name}</h1>
                            <span>{product.price}</span>
                            <img src={apiUrl + product.image} alt=""/>
                        </div>
                    ))}
                </div>)
    );
}

export default Products;