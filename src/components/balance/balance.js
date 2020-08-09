import React from "react";
import {connect} from "react-redux";
import classes from './balance.module.css'

const Balance = ({balance}) => {

    return <div className={classes.Main}>
        <div className={classes.Balance}>Balance: {balance} rubles</div>
        </div>
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
}

export default connect(mapStateToProps)(Balance)