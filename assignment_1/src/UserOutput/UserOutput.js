

import React from 'react';
import './UserOutput.css';
const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Priate King name is {props.name}</p>
            <p>His age is {props.age} years</p>
        </div>
    );
}

export default userOutput;