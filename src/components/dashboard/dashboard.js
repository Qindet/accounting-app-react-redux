import React from "react";
import classes from './dashboard.module.css'
import Balance from "../balance/balance";
import AccordionList from "../UI/accordion";
import Planning from "../planning";

const Dashboard = () => {


    return (
        <div>
            <h1 className={classes.Text}>Dashboard</h1>
            <div className={classes.Dash}>

                <Balance />
                <AccordionList/>
                <Planning/>
            </div>
        </div>
    )
}


export default Dashboard