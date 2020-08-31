import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {userLogin} from "../../shared/redux/actions/userActions";
import {Link} from "react-router-dom";

function UserLogin() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const status = useSelector(state => state.userloginReducer);
    const dispatch = useDispatch();

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.username && user.password) {
            dispatch(userLogin(user.username, user.password));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">

            <h2>LogIn</h2>

            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange}
                           className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')}/>
                    {submitted && !user.username &&
                    <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}
                           className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {submitted && !user.password &&
                    <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {status && status.loading &&
                        <span className="spinner-border spinner-border-sm mr-1">Loading ..</span>}
                        Log-In
                    </button>
                    <Link to="/" className="btn btn-link">Cancel</Link>
                </div>

            </form>

            <div className="feedback_msg_container">
                {status && status.error &&
                <div className="invalid-feedback">
                    {status.error.detail} <br/>
                </div>
                }
                {status && submitted && status.accessToken !== '' &&
                <div className="invalid-feedback">
                    User {user.username} logged succesfully.<br/>
                </div>
                }
            </div>

        </div>
    );
}

export default UserLogin;