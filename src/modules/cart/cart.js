import React, {useState} from "react";
import "../cart/cart.css";
import {useDispatch, useSelector} from "react-redux";
import {Button, Table} from "react-bootstrap";
import {removeItemFromCart, setItemQuantity, toggleCart} from "../../shared/redux/actions/cartActions";
import {AiOutlineClose} from "react-icons/all";
import {createOrder} from "../../shared/redux/actions/orderActions";
import MsgHandler from "../utils/msgHandler/msgHandler";

// TODO: optimize imports, import individual components instead of entire library , do for all files ...

function Cart() {
    const [submitted, setSubmitted] = useState(false);
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
        if (!Object.keys(cartStatus.orderItems).length){
            dispatch(toggleCart());
        }
    }

    function changeItemQuantity(e, prodID) {
        const value = Number(e.target.value);
        dispatch(setItemQuantity(prodID, value));
    }

    function orderProducts() {
        setSubmitted(true);
        dispatch(createOrder(cartStatus.orderItems));
    }

    function handleMsgs() {
        var output = {};
        if (submitted && orderStatus && orderStatus.error) {
            output = {
                ...output,
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
                    {tableItems.length > 0 &&
                    <tr><Button variable="secondary" onClick={() => orderProducts()}>Order products</Button></tr>}
                    </tfoot>
                </Table>
                <MsgHandler msgsList={handleMsgs()}/>
            </div>
        </div>
    )
}

export default Cart