import React from 'react'
import Person from './Person'

function NameListThree() {
    const persons=[
        {
            id:1,
            name:"Scott",
            age:45,
            skill:"ReactJS"
        },
        {
            id:2,
            name:"Adam",
            age:43,
            skill:"Angular"
        },
        {
            id:3,
            name:"Tuan",
            age:41,
            skill:"NodeJS"
        }
    ]
    const personList=persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameListThree
