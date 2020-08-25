import React from "react"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleCart} from "../../shared/redux/actions/cartActions";

function Header() {
    const dispatch = useDispatch();

    return (
        <div>
            <header>
                <nav>
                    <NavLink exact activeClassName="active" to="/"> Home
                    </NavLink>
                    <NavLink activeClassName="active" to="/users"> Users
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact"> Contact
                    </NavLink>
                    <button onClick={() => dispatch(toggleCart())}>Cart</button>
                </nav>
            </header>
        </div>
    )
}

export default Header