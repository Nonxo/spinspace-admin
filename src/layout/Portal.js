import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from '../pages/app/Dashboard';
import Navigation from '../components/Navigation';

const Portal = (props) => {
    const { match } = props;
    return (
        <React.Fragment>
            
            <Navigation />

            <Router>
                <Switch>
                    <Route path={`${match.url}/dashboard`} component={Dashboard} />
                    <Redirect from={match.url} to={`${match.url}/dashboard`} />
                </Switch>
            </Router>

        </React.Fragment>
    )
}

export default Portal;
