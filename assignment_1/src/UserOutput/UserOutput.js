

import React from 'react';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Priate King name is {props.name}
            </p>
            <p>His age is {props.age} years
    </p>
        </div>

    );

}

export default userOutput;