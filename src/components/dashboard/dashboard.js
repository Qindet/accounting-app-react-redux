import React from "react";
import classes from './dashboard.module.css'
import Balance from "../balance/balance";
import AccordionList from "../UI/accordion";

const Dashboard = () => {


    return (
        <div className={classes.Dash}>
            <Balance />
            <AccordionList/>
        </div>
    )
}


export default Dashboard