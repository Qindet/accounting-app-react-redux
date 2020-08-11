import React, {useEffect} from "react";
import {connect} from 'react-redux'
import TableUI from "../components/UI/table-ui";
import {deleteIncome} from "../actions";
import {fetchIncomes} from "../actions/money-operations";
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
            <TableUI items={props.incomeItems} deleteIncome={props.deleteIncome} label="From" type="Income"/>
        </div>
    )
}

const mapStateToProps = ({incomeItems,loading}) => {
    return {
        incomeItems,
        loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteIncome: (id) => dispatch(deleteIncome(id)),
        fetchIncomes: () => dispatch(fetchIncomes())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IncomeContentContainer)