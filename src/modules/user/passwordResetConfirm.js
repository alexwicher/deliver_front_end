import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {passwordResetConfirm} from "../../shared/redux/actions/userActions";
import MsgHandler from "../utils/msgHandler/msgHandler";
import {concatAux} from "../../assets/auxiliaryFunctions";
import {togglePopUp} from "../../shared/redux/actions/popUpActions";
import {Redirect} from "react-router-dom";

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

    function handleMsgs() {
        var output = {};
        if (prcStatus && prcStatus.error) {
            var errors = prcStatus.error;
            output = {
                ...output,
                error: concatAux(concatAux(errors.token, errors.non_field_errors), errors.new_password)
            }
        }
        return output;
    }

    function handleSuccess() {
        if (submitted && prcStatus && prcStatus.status === 204) {
            const msg = "Password resetted, try logging in!";
            dispatch(togglePopUp(msg));
            return <Redirect to="/"/>
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

            <MsgHandler msgsList={handleMsgs()}/>
            {handleSuccess()}

        </div>
    );

}

export default PasswordResetConfirm;