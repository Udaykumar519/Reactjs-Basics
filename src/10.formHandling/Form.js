import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        this.state={
            username: " ",
            comments: " ",
            country: " ",
            gender: " "

        }
    }
    updateUserName(username){
        this.setState({username:username})
        //Again here it is aynchronous
        // console.log(`username: ${this.state.username}`);
    }
    updateComments(comments){
        this.setState({comments:comments})
    }
    getFormData(){
        console.log(this.state.username);
        console.log(this.state.comments);
        console.log(this.state.country);
        console.log(this.state.gender);
    }
    updateCountry(country){
        this.setState({country:country})

    }
    updateGender(gender){
        this.setState({gender:gender})
    }
    // write check box same as others(like Radio)
    // updateAdmin(){
    //     this.setState({isAdmin: !this.setState.isAdmin})
    // }
    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form action="">
                    <div className="form-group">
                    <label htmlFor="">UserName</label>
                    <input type="text" className="form-control w-50" value={this.state.username} onChange={event=>this.updateUserName(event.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">
                        Comments
                        </label>
                        <textarea className="form-control w-50" value={this.state.comment} onChange={event=>this.updateComments(event.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">
                        Country
                        </label>
                        <select className="form-select w-50"
                        value={this.state.country}
                        onChange={event=>this.updateCountry(event.target.value)}>
                            <option value="">select</option>
                            <option value="1">Bharat</option>
                            <option value="2">Australia</option>
                            <option value="3">Japan</option>
                        </select>
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <label htmlFor="">
                        Gender &nbsp;&nbsp;
                        </label>
                        <input type="radio" className="form-check-input " value={1} name="gender"
                        onChange={event=>this.updateGender(event.target.value)}/> Female &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" className="form-check-input " value={0} name="gender"
                        onChange={event=>this.updateGender(event.target.value)}/> Male &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary"
                    onClick={this.getFormData.bind(this)} 
                    >Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default Form
