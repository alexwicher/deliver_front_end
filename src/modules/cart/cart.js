import React, {useEffect, useState} from "react";
import "../cart/cart.css";
import {useDispatch, useSelector} from "react-redux";
import {Button, Table} from "react-bootstrap";
import {emptyCart, removeItemFromCart, setItemQuantity, toggleCart} from "../../shared/redux/actions/cartActions";
import {AiOutlineClose} from "react-icons/all";
import {createOrder} from "../../shared/redux/actions/orderActions";
import MsgHandler from "../utils/msgHandler/msgHandler";
import Redirect from "react-router-dom/es/Redirect";
import {togglePopUp} from "../../shared/redux/actions/popUpActions";
import PopUpMsg from "../utils/PopMsg/popUpMsg";

// TODO: optimize imports, import individual components instead of entire library , do for all files ...

function Cart() {
    var loginStatus = useSelector(state => state.userloginReducer);
    const [submitted, setSubmitted] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const cartStatus = useSelector(state => state.cartReducer);
    const orderStatus = useSelector(state => state.orderReducer);
    let open = cartStatus.visible ? '30%' : '0%';
    const dispatch = useDispatch();
    var tableItems = [];

    for (const key in cartStatus.orderItems) {
        tableItems.push(cartStatus.orderItems[key]);
    }

    function deleteItem(prodID) {
        dispatch(removeItemFromCart(prodID));
        if (!Object.keys(cartStatus.orderItems).length) {
            dispatch(toggleCart());
        }
    }

    useEffect(() => {
        if (orderStatus.order.id > 0) {
            var msg = "New order created for you, with order_ID = " + orderStatus.order.id;
            dispatch(togglePopUp(msg));
            dispatch(toggleCart());
            dispatch(emptyCart());
        }
    }, [orderStatus.order]);

    function changeItemQuantity(e, prodID) {
        const value = Number(e.target.value);
        dispatch(setItemQuantity(prodID, value));
    }

    function redirectLogIn() {
        if (redirect) {
            const msg = "You need to log-in before ordering something...";
            dispatch(togglePopUp(msg));
            return <Redirect to={"user/logIn/"}/>
        }
    }

    function orderProducts() {
        if (loginStatus.accessToken !== '') {
            setSubmitted(true);
            dispatch(createOrder(cartStatus.orderItems, loginStatus.accessToken));
        } else {
            setRedirect(true);
        }
    }

    function handleMsgs() {
        var output = {};
        if (submitted && orderStatus && orderStatus.error && !orderStatus.loading) {
            output = {
                danger: [orderStatus.error.detail]
            }
        }
        return output;
    }

    return (
        <div id="mySidenav" className="sidenav" style={{width: open}}>
            <div className="cartContainer">
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableItems.map(item => (
                        <tr>
                            <td>{item.product.name}</td>
                            <td>{"$" + item.product.price}</td>
                            <td>
                                <input type="number" size="2" value={item.quantity}
                                       onChange={(e) => changeItemQuantity(e, item.product.id)}/>
                            </td>
                            <td>
                                {"$" + Number(item.totalCost).toFixed(2)}
                            </td>
                            <td onClick={() => deleteItem(item.product.id)}>
                                <AiOutlineClose size={24} color="grey"/>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Total order`s cost:</td>
                        <td colSpan={4}>{"$" + Number(tableItems.reduce((a, b) => a + b.totalCost, 0)).toFixed(2)}</td>
                    </tr>
                    {redirectLogIn()}
                    {tableItems.length > 0 &&
                    <tr><Button variable="secondary" onClick={() => orderProducts()}>
                        {orderStatus.loading &&
                        <span className="spinner-border spinner-border-sm mr-1"/>}
                        Order products</Button></tr>}
                    </tfoot>
                </Table>
                <MsgHandler msgsList={handleMsgs()}/>
                <PopUpMsg/>
            </div>
        </div>
    )
}

export default Cart