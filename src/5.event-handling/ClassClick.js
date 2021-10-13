import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("Click the button");
    }
    render() {
        return (
            <div>
            <button className="btn btn-primary" onClick={this.clickHandler}>CLick Me</button>
                
            </div>
        )
    }
}

export default ClassClick
