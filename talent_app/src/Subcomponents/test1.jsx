import React, { Component } from 'react'

class test1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user_name:""
        }
    }
    changeHandler=e=>{
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state);
    }
    render() {

        const {user_name} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text"
                    name="user_name"
                    onChange={this.changeHandler}
                    value={user_name}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default test1
