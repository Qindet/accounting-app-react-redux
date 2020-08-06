import React from "react";
import classes from './income.module.css'
import TableUI from "../UI/table-ui";

import Container from '@material-ui/core/Container';
import ModalUI from "../UI/modal-ui";

const Income = (props) => {

    return (
        <Container className={classes.Main}>
                <TableUI items={props.items}/>
            <div className={classes.Btn}>
                <ModalUI addIncome={props.addIncome}/>
            </div>

        </Container>
    )
}

export default Income