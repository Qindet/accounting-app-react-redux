import React from "react";
import Income from "../components/income";
import {connect} from 'react-redux'
import {addIncome} from "../actions";

const IncomeContainer = (props) => {
    return <Income items={props.items} addIncome={props.addIncome}/>
}

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIncome: (item) => dispatch(addIncome(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncomeContainer)