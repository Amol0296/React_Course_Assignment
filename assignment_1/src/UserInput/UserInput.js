import React from 'react';

const userInput = (props) => {
    return (
        <div className="userInput">
            <input type="text" onChange={props.change} name={props.name} />
        </div>

    );
}

export default userInput;