import React from "react"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleCart} from "../../shared/redux/actions/cartActions";
import {userLogOut} from "../../shared/redux/actions/userActions";

function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.userloginReducer.accessToken);
    return (

        <div>
            <header>
                <nav>
                    <NavLink exact activeClassName="active" to="/"> Home
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact"> Contact
                    </NavLink>
                    {!isLoggedIn && <NavLink activeClassName="active" to="/user/register"> Register
                    </NavLink>}
                    {!isLoggedIn && <NavLink activeClassName="active" to="/user/logIn"> Log-in
                    </NavLink>}
                    {isLoggedIn && <button onClick={() => dispatch(userLogOut())}>Log-Out</button>
                    }
                    <button onClick={() => dispatch(toggleCart())}>Cart</button>
                </nav>
            </header>
        </div>
    )
}

export default Header