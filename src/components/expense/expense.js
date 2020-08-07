import React from "react";
import classes from './expense.module.css'
import TableUI from "../UI/table-ui";

import Container from '@material-ui/core/Container';
import ModalUI from "../UI/modal-ui";
import { deleteExpense} from "../../actions";
import {connect} from "react-redux";

const Expense = (props) => {

    return (
        <Container className={classes.Main}>
            <h2 className={classes.H}>Expenses</h2>
            <TableUI items={props.expenseItems} deleteIncome={props.deleteExpense} label="spending" type="Income"/>
            <div className={classes.Btn}>
                <ModalUI label="spending" type="submit"/>
            </div>
        </Container>
    )
}

const mapStateToProps = ({expenseItems}) => {
    return {
        expenseItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteExpense: (id) => dispatch(deleteExpense(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Expense)

