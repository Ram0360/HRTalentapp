import React, { Component } from 'react'
import './HR_Page.css'
import axios from 'axios'
import { response } from 'express'

class HRPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user_email : "",
            user_password : ""
        }
        // this.loginUser = this.loginUser.bind(this);
    }
    
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        
        axios({
            method:"POST",
            url:'http://localhost:5000/login/userlogin',
            body:postData,
            headers:{
                'Content-Type': 'application/json'
            }
        }) .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        
        // axios
        // .post('http://localhost:5000/login/userlogin',this.state)
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }
    render() {
        const postData = { user_email, user_password } = this.state
        return (
            <div>
                <h1>HR Page</h1>
                <div className="login-form-div">
                    <form className="login-form" onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label style={{color:"yellow"}} for="email">Email address :</label>
                            <input type="email" className="form-control" 
                            name ="user_email"
                            value = {user_email}
                            onChange = {this.changeHandler}
                            placeholder="Enter email address" id="email" required/>
                        </div>
                        <div className="form-group">
                            <label style={{color:"yellow"}} for="pwd">Password:</label>
                            <input type="password" className="form-control" 
                            name="user_password"
                            value = {user_password}
                            onChange = {this.changeHandler}
                            placeholder="Enter password" id="pwd" required/>
                        </div>
                        {/* <div className="form-group form-check">
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox"/> Remember me
                            </label>
                        </div> */}
                    <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>

            </div>
        )
    }

    loginUser()
    {
           
    }
}

export default HRPage