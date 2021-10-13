import React from 'react'
//This is also destructuring ..but not better practice
function GreetingOne({name,skill}) {
    return (
        <div>
            <h2>Name is {name} and his skill is {skill}</h2>
        </div>
    )
}

export default GreetingOne
