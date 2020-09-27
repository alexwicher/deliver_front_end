import React from "react";
import Products from "./modules/products/products";
import Categories from "./modules/categories/categories";
import Cart from "./modules/cart/cart";
import Header from "./modules/header/header";
import Footer from "./modules/footer/footer";
import 'bootstrap/dist/css/bootstrap.css';
import PopUpMsg from "./modules/utils/PopMsg/popUpMsg";

function Main() {

    return (
        <div>
            <PopUpMsg/>
            <Header/>
            <Cart/>
            <div className="content">
                <h1>Simple SPA</h1>
                <Categories/>
                <Products/>
            </div>
            <Footer/>
        </div>

    );
}

export default Main;