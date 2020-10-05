import React, {useEffect, useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {Table} from "react-bootstrap";
import {AiOutlineClose} from "react-icons/all";
import {addDirection, deleteDirection, getDirections} from "../../shared/redux/actions/directionActions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {changeEmail, changeUsername, passwordLoggedResetConfirm} from "../../shared/redux/actions/userActions";
import PopUpMsg from "../utils/PopMsg/popUpMsg";
import {togglePopUp} from "../../shared/redux/actions/popUpActions";

export default function Profile() {
    var loginStatus = useSelector(state => state.userloginReducer);
    const directionStatus = useSelector(state => state.directionReducer);
    const changeEmailStatus = useSelector(state => state.changeEmailReducer);
    const changeUsernameStatus = useSelector(state => state.changeUsernameReducer);
    const changePasswordStatus = useSelector(state => state.loggedPasswordResetReducer);
    var directionsArray = [];
    const dispatch = useDispatch();
    const [directionAdd, setDirectionAdd] = useState('');
    const [emailChange, setEmailChange] = useState({email: '', submitted: false});
    const [usernameChange, setUsernameChange] = useState({pass_user: '', username: '', submitted: false});
    const [passwordChange, setPasswordChange] = useState({re_new_pass: '', new_pass: '', pass: '', submitted: false});
    const [toDelete, setToDelete] = useState(0);

    useEffect(() => {
        dispatch(getDirections(loginStatus.accessToken));
    }, [dispatch]);

    for (const key in directionStatus.directions) {
        directionsArray.push({id: key, address: directionStatus.directions[key]});
    }

    function deleteDirectionButton(dirID) {
        setToDelete(dirID);
        dispatch(deleteDirection(dirID, loginStatus.accessToken));
    }

    function addDirectionButton() {
        if (directionAdd !== '') {
            dispatch(addDirection(directionAdd, loginStatus.accessToken));
        }
    }

    function addDirectionOnChange(e) {
        const {name, value} = e.target;
        setDirectionAdd(value);
    }

    function changeEmailOnChange(e) {
        const {name, value} = e.target;
        setEmailChange(email => ({...email, [name]: value}));
    }

    function changeUsernameOnChange(e) {
        const {name, value} = e.target;
        setUsernameChange(username => ({...username, [name]: value}));
    }

    function changePasswordOnChange(e) {
        const {name, value} = e.target;
        setPasswordChange(pass => ({...pass, [name]: value}));
    }

    function changePasswordSubmit(e) {
        if (passwordChange.pass !== '' && passwordChange.new_pass !== '' && passwordChange.re_new_pass !== '') {
            setPasswordChange({...passwordChange, submitted: true});
            dispatch(passwordLoggedResetConfirm(passwordChange.pass, passwordChange.new_pass, passwordChange.re_new_pass, loginStatus.accessToken));
        }
    }

    function changeEmailSubmit(e) {
        if (emailChange.email !== '') {
            setEmailChange({...emailChange, submitted: true});
            dispatch(changeEmail(emailChange.email, loginStatus.accessToken));
        }
    }

    function changeUsernameSubmit(e) {
        if (usernameChange.username !== '') {
            setUsernameChange({...usernameChange, submitted: true});
            dispatch(changeUsername(usernameChange.username,usernameChange.pass_user, loginStatus.accessToken));
        }
    }

    function handleSucess() {
        if (!changeEmailStatus.loading && emailChange.submitted) {
            setEmailChange({...emailChange, submitted: false});
            const msg = "Email resetted succesfully to: " + loginStatus.email;
            dispatch(togglePopUp(msg));
        }
        if (!changeUsernameStatus.loading && usernameChange.submitted) {
            setUsernameChange({...usernameChange, submitted: false});
            const msg = "Username resetted succesfully to: " + loginStatus.username;
            dispatch(togglePopUp(msg));
        }
        if (!changePasswordStatus.loading && passwordChange.submitted) {
            setPasswordChange({...passwordChange, submitted: false});
            const msg = "Password succesfully changed";
            dispatch(togglePopUp(msg));
        }
    }

    return (
        <div>
            <Header/>
            <h1>Profile</h1>

            <InputGroup className="mb-3">
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder={loginStatus.username}
                    value={usernameChange.username}
                    name='username'
                    onChange={changeUsernameOnChange}
                />
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Type current password"
                    type="password"
                    name="pass_user"
                    onChange={changeUsernameOnChange}
                />
                <InputGroup.Prepend>
                    <Button onClick={changeUsernameSubmit} variant="outline-secondary"> Change Username
                        {changeUsernameStatus.loading && <span className="spinner-border spinner-border-sm mr-1"/>}
                    </Button>
                </InputGroup.Prepend>
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder={loginStatus.email}
                    value={emailChange.email}
                    name='email'
                    onChange={changeEmailOnChange}
                />
                <InputGroup.Prepend>
                    <Button onClick={changeEmailSubmit} variant="outline-secondary"> Change email
                        {changeEmailStatus.loading && <span className="spinner-border spinner-border-sm mr-1"/>}
                    </Button>
                </InputGroup.Prepend>
            </InputGroup>

            <p>Re-set password</p>
            <InputGroup className="mb-3">
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Type current password"
                    type="password"
                    name="pass"
                    onChange={changePasswordOnChange}
                />
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Type new password"
                    type="password"
                    name="new_pass"
                    onChange={changePasswordOnChange}
                />
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Re-type new passoword"
                    type="password"
                    name="re_new_pass"
                    onChange={changePasswordOnChange}
                />
                <InputGroup.Prepend>
                    <Button onClick={changePasswordSubmit} variant="outline-secondary">Change password
                        {changePasswordStatus.loading && <span className="spinner-border spinner-border-sm mr-1"/>}
                    </Button>
                </InputGroup.Prepend>
            </InputGroup>

            <Row>
                <Col>
                    <p>Directions</p>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <FormControl
                            aria-describedby="basic-addon1"
                            placeholder="Add direction"
                            type="text"
                            value={directionAdd}
                            onChange={addDirectionOnChange}
                        />
                        <InputGroup.Prepend>
                            <Button onClick={addDirectionButton} variant="outline-secondary">
                                {directionStatus.loading.add &&
                                <span className="spinner-border spinner-border-sm mr-1"/>}
                                Add Direction
                            </Button>
                        </InputGroup.Prepend>
                    </InputGroup>
                </Col>
            </Row>

            <Table striped bordered hover size="sm">
                <tbody>
                {directionStatus.loading.get && <span className="spinner-border spinner-border-sm mr-1"/>}
                {directionsArray.map(dir => (
                    <tr>
                        <td>{dir.address}</td>
                        <td onClick={() => deleteDirectionButton(dir.id)}>
                            {toDelete === dir.id && directionStatus.loading.delete &&
                            <span className="spinner-border spinner-border-sm mr-1"/>}
                            {!(toDelete === dir.id && directionStatus.loading.delete) &&
                            <AiOutlineClose size={24} color="grey"/>}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <p>Orders</p>


            <Footer/>
            <PopUpMsg/>
            {handleSucess()}
        </div>
    )
}