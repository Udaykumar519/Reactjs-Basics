import React, { Component } from 'react'

export class Counter extends Component {
    constructor(){
        super();
        //state is an object
        this.state={
            count:0
        }
    }
    addCount(){
        this.setState({count: this.state.count+1},()=>{console.log('callbackvalue:',this.state.count)})
        //Dont write like this, page will not render
        // this.state.count=this.state.count+1;
        //This will print 0,by the time above method adds the count.
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={()=>this.addCount()}>Increment
                </button>
            </div>
        )
    }
}

export default Counter
