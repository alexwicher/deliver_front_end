import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {passwordResetConfirm} from "../../shared/redux/actions/userActions";

function PasswordResetConfirm(props) {
    const [passwords, setPasswords] = useState({
        password: '',
        re_password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const prcStatus = useSelector(state => state.passwordConfirmResetReducer);
    const params = props.match.params;

    function handleChange(e) {
        const {name, value} = e.target;
        setPasswords(passwords => ({...passwords, [name]: value}));
    }

    function handleSubmitPassConfirm(e) {
        setSubmitted(true);
        e.preventDefault();
        if (passwords.password && passwords.re_password) {
            dispatch(passwordResetConfirm(params.uid, params.token, passwords.password, passwords.re_password));
        }
    }

    return (
        <div className="resetPassword">
            <form name="form" onSubmit={handleSubmitPassConfirm}>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={passwords.password} onChange={handleChange}
                           className={'form-control' + (submitted && !passwords.password ? ' is-invalid' : '')}/>
                    {submitted && !passwords.password &&
                    <div className="invalid-feedback">Password is required</div>
                    }
                </div>

                <div className="form-group">
                    <label>Retype password</label>
                    <input type="password" name="re_password" value={passwords.re_password} onChange={handleChange}
                           className={'form-control' + (submitted && !passwords.re_password ? ' is-invalid' : '')}/>
                    {submitted && !passwords.re_password &&
                    <div className="invalid-feedback">Please retype the password!</div>
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        Submit new password
                    </button>
                </div>
            </form>

            {prcStatus && prcStatus.status === 204 &&
            <div className="invalid-feedback">
                Password resetted!<br/>
            </div>}
            {prcStatus && prcStatus.error &&
            <div className="invalid-feedback">
                {prcStatus.error.token} <br/>
                {prcStatus.error.non_field_errors} <br/>
                {prcStatus.error.new_password} <br/>
            </div>
            }
        </div>
    );

}

export default PasswordResetConfirm;