import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import {Input} from "@material-ui/core";
import { InputLabel } from '@material-ui/core';

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
    }
}));

export default function ModalUI(props) {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modal,setModal] = React.useState({
        name: '',
        value: ''
    })


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Add new
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
                        e.preventDefault()
                        props.addIncome({...modal,date: new Date().toDateString()})
                    }}
                    >
                        <h2 id="transition-modal-title">Add new income</h2>
                        <InputLabel children="name" className={classes.input}/>
                        <Input value={modal.name} onChange={(event => setModal({...modal,name:event.target.value}))}/>

                        <InputLabel children="value (rub)" className={classes.input}/>
                        <Input value={modal.value} onChange={(event => setModal({...modal,value:event.target.value}))}/>

                        <Button type="submit" variant="outlined" color="primary"
                                className={classes.button}
                        >
                            Submit
                        </Button>


                    </form>
                </Fade>
            </Modal>
        </div>
    );
}
