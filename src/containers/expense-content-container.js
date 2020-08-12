import React, {useEffect} from "react";
import {connect} from 'react-redux'
import TableUI from "../components/UI/table-ui";
import {fetchExpenses, loadDeletedExpense} from "../actions";
import Spinner from "../components/spinner";

const ExpenseContentContainer = (props) => {
    useEffect(() => {
        props.fetchExpenses()
    },[])

    if (props.loadingExpense) {
        return <Spinner/>
    }
    return (
        <div>
            <TableUI items={props.expenseItems} deleteIncome={props.loadDeletedExpense} label="spending" type="Expense"/>
        </div>
    )
}

const mapStateToProps = ({expenseItems,loadingExpense}) => {
    return {
        expenseItems,
        loadingExpense
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchExpenses: () => dispatch(fetchExpenses()),
        loadDeletedExpense: (id) => dispatch(loadDeletedExpense(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseContentContainer)