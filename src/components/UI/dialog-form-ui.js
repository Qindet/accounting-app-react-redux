import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogFormUI(props) {
    const [open, setOpen] = React.useState(false);
    const [goalForm, setGoalForm] = React.useState({name:'',cost:0})
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Choose a goal
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Planning goal</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                       To choose a goal, please enter some name and cost
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Goal"
                        type="text"
                        fullWidth
                        value={goalForm.name}
                        onChange={(e)=>setGoalForm({...goalForm,name:e.target.value})}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="cost"
                        label="cost"
                        type="number"
                        fullWidth
                        value={goalForm.cost}
                        onChange={(e)=>setGoalForm({...goalForm,cost:+e.target.value})}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>{props.addGoal(goalForm.name,goalForm.cost); handleClose()}} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
