//This is parent
import React, { Component } from 'react'
import LifeCycleC from './LifeCycleC';
class LifeCycleB extends Component {
    constructor(){
        super();
        this.state={

        }
        console.log("This is constructor of parent class B");
    }
    static getDerivedStateFromProps(props,state){
        console.log("This is getDerivedStateFromProps method of parent class B");
        return {}
    }
    componentDidMount(){
        console.log("This is componentDidMount method of parent class B");

    }
    render() {
        console.log("This is render method of parent class B");
        return (
            <div>
                <h1>LifeCycleB Component</h1>
                <LifeCycleC />
                
            </div>
        )
    }
}

export default LifeCycleB
