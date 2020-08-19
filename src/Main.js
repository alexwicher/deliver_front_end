import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Products from "./modules/products/products";
import Categories from "./modules/categories/categories";

class Main extends Component {
  render() {
    return (
        <header>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/logout">Logout</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
            <Products/>
            <Categories/>
          </div>
        </header>
    );
  }
}

export default Main;