import React, {useEffect} from "react";
import {connect} from 'react-redux'
import TableUI from "../components/UI/table-ui";
import {loadDeletedIncome} from "../actions";
import {fetchIncomes} from "../actions/income";
import Spinner from "../components/spinner";

const IncomeContentContainer = (props) => {
    useEffect(() => {
        props.fetchIncomes()
    },[])

    if (props.loading) {
        return <Spinner/>
    }
    return (
        <div>
            <TableUI items={props.incomeItems} deleteIncome={props.loadDeletedIncome} label="From" type="Income"/>
        </div>
    )
}

const mapStateToProps = ({incomeItems,loading}) => {
    return {
        incomeItems:incomeItems,
        loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIncomes: () => dispatch(fetchIncomes()),
        loadDeletedIncome: (id) => dispatch(loadDeletedIncome(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncomeContentContainer)