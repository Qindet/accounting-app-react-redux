import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import {Input} from "@material-ui/core";
import { InputLabel } from '@material-ui/core';
import {connect} from 'react-redux'
import {loadExpense, loadUpdatedExpense} from "../../actions/expense";
import {loadUpdatedIncome,loadIncome} from '../../actions/income'

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
        label:false,
        date: new Date().toDateString()
    })


    useEffect(() => {
        if (props.item) {
            setModal({...modal,name:props.item.name,value:props.item.value, id: props.item.id,date: new Date().toDateString()})
        }
    }, [props.item])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onSubmitAction = (e,{loadIncome,loadUpdatedIncome,loadExpense,loadUpdatedExpense}) => {

        e.preventDefault()
        if (!(modal.value.trim()) || !(modal.name.trim())) {
            return
        }
        if (props.type === 'submit') {
                if (props.label === 'spending' && modal.value > props.balance) {
                    loadExpense(modal)
                    setModal({...modal,name:'', value:'', id: null})
                } else {
                    loadIncome(modal)
                    setModal({...modal,name:'', value:'', id: null})
                }
        } else if (props.type === 'update') {

            if (props.label === 'spending' && modal.value > props.balance) {

                loadUpdatedExpense(modal.id,modal)
                setModal({...modal, label:true})
            } else if (props.label === 'From')  {
                loadUpdatedIncome(modal.id,modal)
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
                           onSubmitAction(e,props)
                        } else {
                           e.preventDefault()

                           onSubmitAction(e,props)

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
        loadUpdatedIncome: (id,item) => dispatch(loadUpdatedIncome(id,item)),
        loadExpense: (item) => dispatch(loadExpense(item)),
        loadUpdatedExpense: (id,item) => dispatch(loadUpdatedExpense(id,item)),
        loadIncome: (item) => dispatch(loadIncome(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalUI)