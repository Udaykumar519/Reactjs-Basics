//This is parent
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {
    constructor(){
        super();
        this.state={

        }
        console.log("This is constructor of parent class A");
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromProps method of parent class A");
        return {}
    }
    componentDidMount(){
        console.log("This is componentDidMount method of parent class A");

    }
    render() {
        console.log("This is render method of parent class A");
        return (
            <div>
                <h1>LifeCycleA Component</h1>
                <LifeCycleB />
                
            </div>
        )
    }
}

export default LifeCycleA
