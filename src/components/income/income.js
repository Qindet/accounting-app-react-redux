import React from "react";
import classes from './income.module.css'

import Container from '@material-ui/core/Container';
import ModalUI from "../UI/modal-ui";

import IncomeContentContainer from "../../containers/income-content-container";

const Income = () => {

    return (
        <Container className={classes.Main}>
            <h2 className={classes.H}>Incomes</h2>

               <IncomeContentContainer/>
            <div className={classes.Btn}>
                <ModalUI label="From" type="submit"/>
            </div>
        </Container>
    )
}



export default Income


