import Modal from "react-bootstrap/Modal";
import {togglePopUp} from "../../../shared/redux/actions/popUpActions";
import Button from "react-bootstrap/Button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";


export default function PopUpMsg(input) {
    const dispatch = useDispatch();
    var popUpState = useSelector(state => state.popUpReducer);


    return (
        <Modal show={popUpState.visible} onHide={() => dispatch(togglePopUp())}>
            <div>{popUpState.msg}</div>
            <Button variant="secondary" onClick={() => dispatch(togglePopUp())}>Ok</Button>
        </Modal>
    );
}
