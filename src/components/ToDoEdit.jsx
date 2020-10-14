import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { validateCreation } from "../utils/index"

export default function ToDoEdit(props) {
    const [task, setTask] = useState(props.text);
    const [open, setOpen] = React.useState(false);

    const showSnackBar = () => {
        setOpen(true);
    };

    const handleCloseSnackBar = () => {
        setOpen(false);
    };

    const onChangeTask = (e) => {
        setTask(e.target.value)
    }

    const handleKeyEvent = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            // putNewTask();
        }
    }

    const editTask = () => {
        if (validateCreation.test(task)) {
            props.editTask(props.uuid, task)
            handleCloseDialog();
        } else {
            showSnackBar();
        }
    }

    const handleCloseDialog = () => {
        props.setOpen(false)
    }

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={props.open} onClose={handleCloseDialog}>
            <DialogTitle id="simple-dialog-title">Editar tarea</DialogTitle>
            <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
                <TextField defaultValue={task} onKeyPress={handleKeyEvent} id="outlined-basic" label="Ingrese su tarea" variant="outlined" onChange={onChangeTask} />
                <Button onClick={editTask} variant="contained" color="primary" style={{ marginLeft: 10 }}>
                    Editar tarea
                </Button>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseSnackBar}>
                    <Alert severity="error">
                        Falta o excede los caracteres permitidos
                </Alert>
                </Snackbar>
            </div>
        </Dialog>
    );
}