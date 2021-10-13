import React from 'react'

function Child(props) {
    // console.log(props);
    const {name,city,method}=props;
    return (
        <div>
            <h3>Name:{name}</h3>
            <h3>city:{city}</h3>
            <button className="btn btn-primary" onClick={()=>method("child")}></button>
        </div>
    )
}

export default Child
