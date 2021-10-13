import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super();
        this.state={
            message:'Hello'
        }
        // making bind in constructor..not so much used
        this.clickHandler=this.clickHandler.bind(this)
    }
    //As this global, in strict mode this becomes undefined
    //This one we have done earlier
    //define this first using bind()
    // clickHandler(){
    //     // console.log(this);
    //     this.setState({message:"Thank you"})
    // }
//Fourth Approach
    clickHandler=()=>{
        this.setState({message:"Thank you"})
    }
    render() {
        return (
            <div>
            <h1>{this.state.message}</h1>
            
            <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>Click me FirstApproach
            </button>
            <br />
            <br />

            <button className="btn btn-primary" onClick={()=>this.clickHandler()}>Click me SecondApproach
            </button>
            <br />
            <br />

            <button className="btn btn-primary" onClick={this.clickHandler}>Click me Third Approach_Bind_inside_Constructor
            </button>

                
            </div>
        )
    }
}

export default EventBind
