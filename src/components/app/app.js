import React, {Fragment} from "react";
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from "../UI/header-ui";
import classes from './app.css'
import Income from "../../components/income";
import Expense from "../expense/expense";
import Dashboard from "../dashboard";

const App = () => {

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact/>
                <Route path='/income' component={Income}/>
                <Route path='/expense' component={Expense}/>
                <Redirect to="/"/>
            </Switch>

        </Fragment>
    )
}

export default App