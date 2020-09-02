import React from "react";

function MsgHandler(input) {
    var msgsList = input.msgsList;
    return (
        <div className="messageContainer">
            {Object.keys(msgsList).map((key) => (
                <div className={key + '_feedback'}>
                    {msgsList[key].map(msg => (<p>{msg}</p>) )}
                </div>
            ))}
        </div>
    );
}

export default MsgHandler;