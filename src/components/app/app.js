import React, {Fragment} from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from "../UI/header-ui";
import classes from './app.css'
import DashboardContainer from "../../containers/dashboard-container";
import IncomeContainer from "../../containers/income-container";

const App = () => {

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/" component={DashboardContainer} exact/>
                <Route path='/income' component={IncomeContainer}/>
                <Redirect to="/"/>
            </Switch>

        </Fragment>
    )
}

export default App