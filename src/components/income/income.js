import React from "react";
import classes from './income.module.css'
import TableUI from "../UI/table-ui";

import Container from '@material-ui/core/Container';
import ModalUI from "../UI/modal-ui";

const Income = () => {
    return (
        <Container className={classes.Main}>
                <TableUI />
            <div className={classes.Btn}>
                <ModalUI />
            </div>

        </Container>
    )
}

export default Income