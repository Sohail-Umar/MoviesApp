import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function FormDialog(props) {
    const [open, setOpen] = React.useState(true);
    const [input, setInput] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {console.log("Button Working")}
            <Button variant="outlined" onClick={handleClickOpen}>
                Update data
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update the data
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setInput(e.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}