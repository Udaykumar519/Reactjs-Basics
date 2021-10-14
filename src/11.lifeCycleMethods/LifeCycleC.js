//This is parent
import React, { Component } from 'react'
class LifeCycleC extends Component {
    constructor(){
        super();
        this.state={

        }
        console.log("This is constructor of parent class C");
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromProps method of parent class C");
        return {}
    }
    componentDidMount(){
        console.log("This is componentDidMount method of parent class C");

    }
    render() {
        console.log("This is render method of parent class C");
        return (
            <div>
                <h1>LifeCycleC Component</h1>
                
            </div>
        )
    }
}

export default LifeCycleC
