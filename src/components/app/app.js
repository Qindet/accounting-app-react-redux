import React, {Fragment} from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from "../UI/header-ui";
import classes from './app.css'
import DashboardContainer from "../../containers/dashboard-container";
import Income from "../../components/income";
import Expense from "../expense/expense";

const App = () => {

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/" component={DashboardContainer} exact/>
                <Route path='/income' component={Income}/>
                <Route path='/expense' component={Expense}/>
                <Redirect to="/"/>
            </Switch>

        </Fragment>
    )
}

export default App