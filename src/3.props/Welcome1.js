import React, { Component } from 'react'

export class Welcome1 extends Component {
    render() {
        //Destructuring
        const {name,skill}=this.props;
        return (
            <div>
                <h1>Name is {name}</h1>
            </div>
        )
    }
}

export default Welcome1
