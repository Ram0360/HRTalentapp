import React, { Component } from 'react'
import Header from '../header/Header'
import ContentPage from '../content/ContentPage'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './Registration.css'


class Registration extends Component {
    render() {
        return (
            <Router>
            <div>
                <div>
                 <Header/>
                </div>
                
                <div className="row">
                        <div className="col-sm-2" id="side-menu">
                            <nav className="navbar bg-light">
                            
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink to="/home/httpexample">Http Example</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/home/shop">Http Example</NavLink>
                                    </li>                                 
                                </ul>

                            </nav>
                        </div>

                        <div className="col-sm-10" id="content-page">
                            <Route path="/home/httpexample" exact component={ContentPage}/>
                            
                            <Route path="/home/shop" exact render = {
                                () => {
                                    return (<h1>Welcome</h1>)
                                }
                            }/>   
                        </div>
                </div>
                
               
            </div>

          
            </Router>


        )
    }
}

export default Registration
