import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import {Input} from "@material-ui/core";
import { InputLabel } from '@material-ui/core';
import {connect} from 'react-redux'
import {addExpense, addIncome, updateExpense, updateIncome} from "../../actions/money-operations";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 6, 3),
        position: 'relative',
        minWidth: '300px',
        minHeight: '200px'
    },
    input: {
        marginTop: '10px',
    },
    button: {
        position: 'absolute',
        bottom: '70px',
        right: '20px'
    },
    error: {
        color: 'red',
        marginTop: '5px'
    }
}));

function ModalUI(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modal,setModal] = React.useState({
        name: '',
        value: '',
        id: null,
        label:false
    })

    useEffect(() => {
        if (props.item) {
            setModal({...modal,name:props.item.name,value:props.item.value, id: props.item.id})
        }
    }, [props.item])


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmitAction = (e,add,update) => {
        e.preventDefault()
        if (!(modal.value.trim()) || !(modal.name.trim())) {
            return
        }
        if (props.type === 'submit') {
                if (props.label === 'spending' && modal.value > props.balance) {
                    setModal({...modal, label:true})
                } else {
                    add({...modal,date: new Date().toDateString(),id: Math.floor(Math.random()*1000000)})
                    setModal({...modal,name:'', value:'', id: null, label:false})
                }
        } else if (props.type === 'update') {
            if (props.label === 'spending' && modal.value > props.balance) {
                setModal({...modal, label:true})
            } else {
                update(modal.id,{...modal,date: new Date().toDateString()})
                setModal({...modal,label:false})
            }
        }
    }

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleOpen}>
                {props.name?props.name:'Add new'}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <form className={classes.paper}
                    onSubmit={(e) => {
                        if (props.label==='spending') {
                           onSubmitAction(e,props.addExpense,props.updateExpense)
                        } else {
                            onSubmitAction(e,props.addIncome,props.updateIncome)
                        }
                    }}
                    >
                        {props.type==='update'? <h2>Update item</h2> : <h2 id="transition-modal-title">{props.label ==='From'?'Add new income':'Add new spending'}</h2>}
                        <InputLabel children={props.label} className={classes.input}/>

                        <Input type="text" value={modal.name} onChange={(event => setModal({...modal,name:event.target.value}))}/>

                        <InputLabel children="value (rub)" className={classes.input}/>
                        <Input type='number' value={modal.value} onChange={(event => setModal({...modal,value:event.target.value}))}/>
                        <br/>
                        {modal.label?<div className={classes.error}>Not enough money</div>: null}
                        <Button type="submit" variant="outlined" color="primary"
                                className={classes.button}
                        >
                            {props.type==="submit"?'Submit':'Update'}
                        </Button>
                    </form>
                </Fade>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIncome: (item) => dispatch(addIncome(item)),
        updateIncome: (id,item) => dispatch(updateIncome(id,item)),
        addExpense: (item) => dispatch(addExpense(item)),
        updateExpense: (id,item) => dispatch(updateExpense(id,item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalUI)