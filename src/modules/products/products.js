import React, {useEffect} from 'react';
import {apiUrl} from "../../shared/api";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../shared/redux/actions/productListActions";
import {addItemToCart, setItemQuantity, toggleCart} from "../../shared/redux/actions/cartActions";

function Products() {
    const dispatch = useDispatch();
    const productListData = useSelector(state => state.productListReducer);
    const cartStatus = useSelector(state => state.cartReducer);

    useEffect(() => {
        dispatch(fetchProductList(productListData.categoryID));
    }, [dispatch, productListData.categoryID]);

    function addItemToCartOnClick(prod, e) {
        if (!cartStatus.visible) {
            dispatch(toggleCart())
        }
        const item = cartStatus.orderItems[prod.id];
        if (item) {
            dispatch(setItemQuantity(prod.id, item.quantity + 1));
        } else {
            dispatch(addItemToCart(prod));
        }
    }

    return (
        productListData.loading ? (<h2> Loading ... </h2>) :
            productListData.error ? (<h2> {productListData.error} </h2>) : (
                <div className="productList">
                    {productListData.products.map(product => (
                        <div className="product" id={product.id} onClick={e => addItemToCartOnClick(product, e)}>
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