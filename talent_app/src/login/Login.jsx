import React, { Component } from 'react'
import './Login.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Form, FormGroup, Label, Input, FormText
  } from 'reactstrap';

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                {/* <div className="quotes">
                    <h2 className="quote1">Plant Career</h2>
                    <h2 className="quote2">Harvest Knowledge</h2>
                </div> */}
                <div className="login-box"> 
                    {/* <div className="panel panel-default">
                        <div className="panel-heading">
                            Login
                        </div>
                        <div className="panel-body">
                            <input type="text" placeholder="Enter user name .."/>
                        </div>
                    </div> */}
                    <div>
                        <Card>
                            {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className="title-card">
                                Chasing Minds Career Solutions
                            </CardTitle>
                            {/* <CardSubtitle>Talent aquisition portal</CardSubtitle> */}
                            <div className="user-details">
                                <Form>
                                <FormGroup>
                                    <Label className="email-user" for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter user name" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="pswd-user" for="examplePassword">Password</Label>
                                    <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                                </FormGroup>
                                </Form>
                                <CardText><a href="#">Not a registered user ?, Please sign up</a></CardText>
                                <Button>Login</Button>
                            </div>
                            
                            </CardBody>
                        </Card>
                    </div>


                </div>
            </div>
        )
    }
}

export default Login
