import React from "react";
import DialogFormUI from "../UI/dialog-form-ui";
import classes from './planning.module.css'
import ProgressUI from "../UI/progress-ui";
import {connect} from 'react-redux'
import {addGoal} from "../../actions";

const Planning = (props) => {

    return (
        <div className={classes.Main}>
            <DialogFormUI addGoal={props.addGoal}/>

            <ProgressUI name={props.name} cost={props.cost} balance={props.balance}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.nameOfGoal,
        cost: state.costOfGoal,
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGoal: (name,cost) => dispatch(addGoal(name,cost))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Planning)