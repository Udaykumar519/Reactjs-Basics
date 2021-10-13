import React from 'react'

function Person(props) {
    console.log(props);
    const {person}=props;

    return (
        <div>
            <h2>
            I am {person.name} <br />
            I am {person.age} years old <br />
            I am {person.skill}
            </h2>
        
        </div>
    )
}

export default Person
