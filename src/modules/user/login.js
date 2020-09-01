import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {passwordReset, userLogin} from "../../shared/redux/actions/userActions";
import {Link} from "react-router-dom";

function UserLogin() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [email, setEmail] = useState('');
    const [passwordResetForm, setPasswordResetForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submittedReset, setSubmittedReset] = useState(false);
    const loginStatus = useSelector(state => state.userloginReducer);
    const resetPassStat = useSelector(state => state.passwordResetReducer);
    const dispatch = useDispatch();

    function handleChangeLogin(e) {
        const {name, value} = e.target;
        setUser(user => ({...user, [name]: value}));
    }

    function handleResetPassFormChange(e) {
        const {name, value} = e.target;
        setEmail(value);
    }

    function handleLoginSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (user.username && user.password) {
            dispatch(userLogin(user.username, user.password));
        }
    }

    function handleSubmitPassReset(e) {
        setSubmittedReset(true);
        e.preventDefault();
        if (email) {
            dispatch(passwordReset(email));
        }
    }

    function togglePasswordResetForm(e) {
        e.preventDefault();
        setPasswordResetForm(!passwordResetForm);
    }

    //TODO: add info and error message handler function to simplify code below ->
    //TODO: and use it for register.js and passwordResetConfirm.js too ...
    return (
        <div className="col-lg-8 offset-lg-2">

            <h2>LogIn</h2>

            <form name="form" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChangeLogin}
                           className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')}/>
                    {submitted && !user.username &&
                    <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChangeLogin}
                           className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                    {submitted && !user.password &&
                    <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loginStatus && loginStatus.loading &&
                        <span className="spinner-border spinner-border-sm mr-1">Loading ..</span>}
                        Log-In
                    </button>
                    <Link to="/" className="btn btn-link">Cancel</Link>
                </div>

            </form>

            <div className="feedback_msg_container">
                {loginStatus && loginStatus.error &&
                <div className="invalid-feedback">
                    {loginStatus.error.detail} <br/>
                </div>
                }
                {loginStatus && submitted && loginStatus.accessToken !== '' &&
                <div className="invalid-feedback">
                    User {user.username} logged succesfully.<br/>
                </div>
                }
            </div>

            <button onClick={togglePasswordResetForm}>Forgot password?</button>

            {passwordResetForm &&
            <div className="resetPassword">
                <form name="form" onSubmit={handleSubmitPassReset}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={handleResetPassFormChange}
                               className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')}/>
                        {submittedReset && !email &&
                        <div className="invalid-feedback">An Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">
                            Send email confirmation
                        </button>
                    </div>
                </form>
                {resetPassStat && resetPassStat.status === 204 &&
                <div className="invalid-feedback">
                    We have sent the confirmation mail. Check your mail out and click the link to re-set the
                    password.<br/>
                </div>
                }
                {resetPassStat && resetPassStat.error &&
                <div className="invalid-feedback">
                    The server has failed to send a message to that email address.<br/>
                </div>
                }
            </div>}

        </div>
    );
}

export default UserLogin;