import React, { Component } from 'react'


class ApplicantPage extends Component {
    render() {
        return (
            <div>
                <div className="login-form-div">
                    <form className="login-form" action="/action_page.php">
                        <div className="form-group">
                            <label style={{color:"yellow"}} for="email">Email</label>
                            <input type="email" className="form-control" 
                            placeholder="Enter email address" id="email" required/>
                        </div>
                        <div className="form-group">
                            <label style={{color:"yellow"}} for="pwd">Password:</label>
                            <input type="password" className="form-control" 
                            placeholder="Enter password" id="pwd" required/>
                        </div>
                        <div className="form-group form-check">
                           <h7><a href="#">Not a registered user, click here</a></h7>
                        </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ApplicantPage
