import React from "react";
import classes from './expense.module.css'

import Container from '@material-ui/core/Container';
import ModalUI from "../UI/modal-ui";

import ExpenseContentContainer from "../../containers/expense-content-container";

const Expense = () => {

    return (
        <Container className={classes.Main}>
            <h2 className={classes.H}>Expenses</h2>
                <ExpenseContentContainer/>
            <div className={classes.Btn}>
                <ModalUI label="spending" type="submit"/>
            </div>
        </Container>
    )
}



export default Expense

