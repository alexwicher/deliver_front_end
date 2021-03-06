import React from "react"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleCart} from "../../shared/redux/actions/cartActions";
import {userLogOut} from "../../shared/redux/actions/userActions";
import {togglePopUp} from "../../shared/redux/actions/popUpActions";

function Header() {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.userloginReducer);
    return (
        <div>
            <header>
                <nav>
                    <NavLink exact activeClassName="active" to="/"> Home
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact"> Contact
                    </NavLink>
                    {!userState.accessToken && <NavLink activeClassName="active" to="/user/register"> Register
                    </NavLink>}
                    {!userState.accessToken && <NavLink activeClassName="active" to="/user/logIn"> Log-in
                    </NavLink>}
                    {userState.accessToken && <button onClick={() => {
                        dispatch(togglePopUp("Bye bye " + userState.username + "!"));
                        dispatch(userLogOut());
                    }}>Log-Out</button>
                    }
                    <button onClick={() => dispatch(toggleCart())}>Cart</button>
                </nav>
            </header>
        </div>
    )
}

export default Header