import React from "react"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleCart} from "../../shared/redux/actions/cartActions";
import {userLogOut} from "../../shared/redux/actions/userActions";
import {togglePopUp} from "../../shared/redux/actions/popUpActions";
import Button from "react-bootstrap/Button";

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
                    {userState.accessToken && <NavLink activeClassName="active" to={"/user/"+userState.uid}> Profile
                    </NavLink>}
                    {userState.accessToken &&  <Button variant="link" onClick={() => {
                        dispatch(togglePopUp("Bye bye " + userState.username + "!"));
                        dispatch(userLogOut());
                    }}>Log-Out</Button>
                    }
                    <Button variant="link" onClick={() => dispatch(toggleCart())}>Cart</Button>
                </nav>
            </header>
        </div>
    )
}

export default Header