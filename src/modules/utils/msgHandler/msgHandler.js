import React from "react";
import {Alert} from "react-bootstrap";

function MsgHandler(input) {
    var msgsList = input.msgsList;
    return (
        <div className="messageContainer">
            {Object.keys(msgsList).map((key) => (
                <Alert variant={key}>
                    {msgsList[key].map(msg => (<p>{msg}</p>))}
                </Alert>
            ))}
        </div>
    );
}

/*Alert types from bootstrap
*  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',*/

export default MsgHandler;