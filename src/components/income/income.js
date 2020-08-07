import React from "react";
import classes from './income.module.css'
import TableUI from "../UI/table-ui";

import Container from '@material-ui/core/Container';
import ModalUI from "../UI/modal-ui";
import {deleteIncome} from "../../actions";
import {connect} from "react-redux";

const Income = (props) => {

    return (
        <Container className={classes.Main}>
            <h2 className={classes.H}>Incomes</h2>
                <TableUI items={props.incomeItems} deleteIncome={props.deleteIncome} label="From" type="Income"/>
            <div className={classes.Btn}>
                <ModalUI label="From" type="submit"/>
            </div>
        </Container>
    )
}

const mapStateToProps = ({incomeItems}) => {
    return {
        incomeItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteIncome: (id) => dispatch(deleteIncome(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Income)


