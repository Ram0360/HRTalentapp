import React, { Component } from 'react';
import './ContentPage.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApplicantPage from '../applicant_page/ApplicantPage';
import HRPage from '../hr_page/HRPage'
// import test1 from '../Subcomponents/test1'

class ContentPage extends Component {
    render() {
        return (
            <Router>
                <div className="contentt">
                    <Route path="/HrTeam" exact component={HRPage}/>
                    <Route path="/Applicant" exact component={ApplicantPage}/>
                </div>
            </Router>
        )
    }
}
export default ContentPage