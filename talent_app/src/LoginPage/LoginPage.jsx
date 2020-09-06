import React, { Component } from 'react'
import Header from '../header/Header'
import Carosels from '../Subcomponents/Carosels'
import ContentPage from '../content/ContentPage'
import '../LoginPage/LoginPage.css'

class LoginPage extends Component {

    render() {
        return (
            <div>
                <div className="header">
                     {/* <Carosels/> */}
                </div>
                <div id="navbar1">
                    <Header/>
                </div>
                <div className="content-comp">
                    <ContentPage/>
                </div>
              
            </div>
        )
    }

       
}

export default LoginPage