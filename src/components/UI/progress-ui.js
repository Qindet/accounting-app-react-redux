import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    text: {
        margin: '20px',
        marginLeft: '0px'
    }
});

export default function ProgressUI(props) {
    const classes = useStyles();


    const progress = (cost,balance) => {
            return balance/Math.floor(cost/100) || 0
    }


    return (
        <div className={classes.root}>
            <div className={classes.text}>Current goal is {props.name}</div>

            <LinearProgressWithLabel value={progress(props.cost,props.balance)} />
        </div>
    );
}
