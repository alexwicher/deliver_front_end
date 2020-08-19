import React, {Component} from 'react';
import {apiUrl, getAllProducts} from "../../shared/api";

class Products extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        // TODO: componentDidMount NOT EXECUTING!!!
        await getAllProducts().then(res => {
            const products = res.data;
            this.setState({products: products});
        });
    }

    render() {
        return (
            <div>
                {this.state.products.map(item => (
                    <div>
                        <h1>{item.name}</h1>
                        <span>{item.price}</span>
                        <img src={apiUrl + item.image} alt=""/>
                    </div>
                ))}
            </div>
        );
    }
}

export default Products;