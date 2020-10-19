import React from "react";

export default function OrderDetails(input) {
    return (
        <React.Fragment>
            <tr>
                <td>Product</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Subtotal</td>
            </tr>
            {(input.products).map(details => (
                <tr>
                    <td>{details.product_name}</td>
                    <td>{details.quantity}</td>
                    <td>{details.product_price}</td>
                    <td>{details.total}</td>
                </tr>
            ))}
        </React.Fragment>
    );
}

