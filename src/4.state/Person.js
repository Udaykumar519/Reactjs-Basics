import React, { Component } from 'react'

export class Person extends Component {
    constructor(){
        super();
        this.state={
            name:"Uday",
            city:"Hyderabad",
            isActive:true
        }
    }

    render() {
        const {name,city,isActive}=this.state;
        return (
            <div>
            <h1>{name} is in {city} and he is {isActive}</h1>
            </div>
        )
    }
}

export default Person
