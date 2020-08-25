import React from "react";
import Products from "./modules/products/products";
import Categories from "./modules/categories/categories";
import Cart from "./modules/cart/cart";
import Header from "./modules/header/header";
import Footer from "./modules/footer/footer";
import {Provider} from 'react-redux';
import {store} from "./shared/redux/store";

function Main() {
    return (
        <Provider store={store}>
            <div>
                <Header/>
                <Cart/>
                <div className="content">
                    <h1>Simple SPA</h1>
                    <Products/>
                    <Categories/>
                </div>
                <Footer/>
            </div>
        </Provider>
    );
}

export default Main;