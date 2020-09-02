import React from "react";
import Products from "./modules/products/products";
import Categories from "./modules/categories/categories";
import Cart from "./modules/cart/cart";
import Header from "./modules/header/header";
import Footer from "./modules/footer/footer";
import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {togglePopUp} from "./shared/redux/actions/popUpActions";

function Main() {
    var popUpState = useSelector(s => s.popUpReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <Popup open={popUpState.visible}
                   closeOnDocumentClick
                   onClose={() => dispatch(togglePopUp())} position="bottom left">
                <div>{popUpState.msg}</div>
            </Popup>

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