import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {passwordReset, userLogin} from "../../shared/redux/actions/userActions";
import {Link, Redirect} from "react-router-dom";
import MsgHandler from "../utils/msgHandler/msgHandler";
import {togglePopUp} from "../../shared/redux/actions/popUpActions";

function UserLogin() {
    const [user, setUser] = useState({
        username: '',
        password: '',
    });
    const [email, setEmail] = useState('');
    const [passwordResetForm, setPasswordResetForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submittedReset, setSubmittedReset] = useState(false);
    var loginStatus = useSelector(state => state.userloginReducer);
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
            loginStatus.error = []; //Clean previous persisted error state...
            dispatch(userLogin(user.username, user.password));
        }
    }

    function handleSubmitPassReset(e) {
        e.preventDefault();
        setSubmittedReset(true);
        if (email) {
            dispatch(passwordReset(email));
        }
    }

    function togglePasswordResetForm(e) {
        e.preventDefault();
        setPasswordResetForm(!passwordResetForm);
    }

    function handleMsgs() {
        var output = {};
        if (submitted && loginStatus && loginStatus.error) {
            output = {
                ...output,
                danger: [loginStatus.error.detail]
            }
        }
        if (passwordResetForm) {
            if (submittedReset && resetPassStat && resetPassStat.error) {
                output = {
                    ...output,
                    danger: ["The server has failed to send a message to that email address."]
                }
            }
        }
        return output;
    }

    function handleSuccess() {
        if (loginStatus && submitted && loginStatus.accessToken !== '') {
            const msg = "Welcome " + user.username + " you are now logged in!";
            dispatch(togglePopUp(msg));
            return <Redirect to="/"/>
        }
        if (submittedReset && passwordResetForm && resetPassStat && resetPassStat.status === 204) {
            const msg = "We have sent the confirmation mail. Check your mail out and click the link to re-set your\n" +
                " password.";
            dispatch(togglePopUp(msg));
            return <Redirect to="/"/>
        }
    }

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
            </div>}
            <MsgHandler msgsList={handleMsgs()}/>
            {handleSuccess()}
        </div>
    );
}

export default UserLogin;