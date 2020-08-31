import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {userRegister} from "../../shared/redux/actions/userActions";
import {Link} from "react-router-dom";

function UserRegister() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        re_password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const status = useSelector(state => state.userRegisterReducer);
    const dispatch = useDispatch();

    function handleChange(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.email && user.username && user.password && user.re_password) {
            dispatch(userRegister(user.username, user.password, user.email, user.re_password));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">

            <h2>Register</h2>

            <div className="info_msg_container">
                * Password must be more than 8 characters long. <br/>
                * Password and username must not be similar. <br/>
                * Password must not be too common (12345678,abcdefgh,etc.). <br/>
            </div>

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
                    <label>e-mail</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange}
                           className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')}/>
                    {submitted && !user.email &&
                    <div className="invalid-feedback">e-mail is required</div>
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
                    <label>Re-type password</label>
                    <input type="password" name="re_password" value={user.re_password} onChange={handleChange}
                           className={'form-control' + (submitted && !user.re_password ? ' is-invalid' : '')}/>
                    {submitted && !user.re_password &&
                    <div className="invalid-feedback">Retype password please</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {status && status.loading &&
                        <span className="spinner-border spinner-border-sm mr-1">Loading ..</span>}
                        Register
                    </button>
                    <Link to="/" className="btn btn-link">Cancel</Link>
                </div>

            </form>

            <div className="feedback_msg_container">
                {status && status.error &&
                <div className="invalid-feedback">
                    {status.error.password} <br/>
                    {status.error.username} <br/>
                    {status.error.email} <br/>
                    {status.error.non_field_errors} <br/>
                </div>
                }
                {status && submitted && status.user === user.username &&
                <div className="invalid-feedback">
                    User {status.user} has been registered succesfully.<br/>
                </div>
                }
            </div>

        </div>
    );
}

export default UserRegister;