import React from "react";
import "../cart/cart.css";
import {useSelector} from "react-redux";

function Cart() {
    const sideBarVisible = useSelector(state => state.cartReducer.visible);
    let open = sideBarVisible ? '25%' : '0%';
    return (
        <div id="mySidenav" className="sidenav" style={{width: open}}>
            <div className="container">
                {/*<h3 className="text-uppercase mb-20 mt-2">Products*/}
                {/*    <i className="fa fa-close" style="position: absolute;right: 0;margin-right: 10%;cursor: pointer"*/}
                {/*       onClick="closeSideBar()"></i>*/}
                {/*</h3>*/}
                {/*<div id="basket">*/}
                {/*    <div className="box mt-0 pb-0 no-horizontal-padding">*/}
                {/*        <form method="POST" action="{% url 'orders:order_create' %}">*/}
                {/*            <div className="table-responsive">*/}
                {/*                <table className="table" id="table" style="font-family: Permanent Marker;">*/}
                {/*                    <thead>*/}
                {/*                    <tr>*/}
                {/*                        <th>Product</th>*/}
                {/*                        <th>Quantity</th>*/}
                {/*                        <th>Price</th>*/}
                {/*                        <th colSpan="2">Total</th>*/}
                {/*                    </tr>*/}
                {/*                    </thead>*/}
                {/*                    <tbody>*/}
                {/*                    </tbody>*/}
                {/*                    <tfoot>*/}
                {/*                    <tr>*/}
                {/*                        <td>Total cost:</td>*/}
                {/*                        <td id="totalCost"></td>*/}
                {/*                    </tr>*/}
                {/*                    </tfoot>*/}
                {/*                </table>*/}
                {/*            </div>*/}
                {/*            <div className="box-footer d-flex justify-content-between align-items-center">*/}
                {/*                <input name="prodID" type="hidden" value="{{ product.id }}"/>*/}

                {/*                <div className="right-col">*/}
                {/*                    {% csrf_token %}*/}
                {/*                    <button type="submit" className="btn btn-secondary"*/}
                {/*                            style="font-size:20px;margin-top: 3%;color: #ffffff;"><i*/}
                {/*                        className="fa fa-credit-card"></i>*/}
                {/*                        Order*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}

                {/*</div>*/}
            </div>
        </div>
    )
}

export default Cart