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

export default function Profile() {
    var loginStatus = useSelector(state => state.userloginReducer);
    const directionStatus = useSelector(state => state.directionReducer);
    var directionsArray = [];
    const dispatch = useDispatch();
    const [directionAdd, setDirectionAdd] = useState('');
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

    return (
        <div>
            <Header/>
            <h1>Profile</h1>

            <InputGroup className="mb-3">
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder={loginStatus.username}
                />
                <InputGroup.Prepend>
                    <Button variant="outline-secondary">Change Username</Button>
                </InputGroup.Prepend>
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder={loginStatus.email}
                />
                <InputGroup.Prepend>
                    <Button variant="outline-secondary">Change email</Button>
                </InputGroup.Prepend>
            </InputGroup>

            <p>Re-set password</p>
            <InputGroup className="mb-3">
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Type current password"
                    type="password"
                />
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Type new password"
                    type="password"
                />
                <FormControl
                    aria-describedby="basic-addon1"
                    placeholder="Re-type new passowrd"
                    type="password"
                />
                <InputGroup.Prepend>
                    <Button variant="outline-secondary">Change password</Button>
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
        </div>
    )
}