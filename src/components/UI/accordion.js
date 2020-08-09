import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    root: {
       minWidth: '450px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function AccordionList(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>History of incomes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                            {props.incomeItems.map((item) => `${item.value} rub from ${item.name} at ${item.date}`)}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>History of expenses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.expenseItems.map((item) => `${item.value} rub spend ${item.name} at ${item.date}`)}
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        incomeItems: state.incomeItems,
        expenseItems: state.expenseItems
    }
}

export default connect(mapStateToProps)(AccordionList)
