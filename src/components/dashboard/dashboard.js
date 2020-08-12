import React, {useEffect} from "react";
import classes from './dashboard.module.css'
import Balance from "../balance/balance";
import AccordionList from "../UI/accordion";
import Planning from "../planning";
import {fetchExpenses, fetchIncomes} from "../../actions";
import {connect} from 'react-redux'

const Dashboard = (props) => {
    useEffect(() => {
        props.fetchIncomes()
        props.fetchExpenses()
    },[])

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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIncomes: () => dispatch(fetchIncomes()),
        fetchExpenses: () => dispatch(fetchExpenses())
    }
}


export default connect(null,mapDispatchToProps)(Dashboard)