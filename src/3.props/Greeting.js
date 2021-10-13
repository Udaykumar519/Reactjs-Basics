import React from 'react'

function Greeting(props) {
    console.log(props);
    const {name,skill,children}=props;
    return (
        <div>
            <h2>Name is {name} and his skill is {skill} {children}</h2>
        </div>
    )
}

export default Greeting
