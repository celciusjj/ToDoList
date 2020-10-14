import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { validateCreation, uuidGenerator } from "../utils/index"

function ToDoAdd(props) {

    const [task, setTask] = useState("");
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

    const putNewTask = () => {
        if (validateCreation.test(task)) {
            const newTask = {
                text: task,
                isDeleted: false,
                isCompleted: false,
                id: uuidGenerator()
            }
            props.addTask([...props.tasks, newTask])
            setTask("")
        } else {
            showSnackBar();
        }
    }

    const handleKeyEvent = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            putNewTask();
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
            <TextField style={{width: "50%"}} value={task} onKeyPress={handleKeyEvent} id="outlined-basic" label="Ingrese su tarea" variant="outlined" onChange={onChangeTask} />
            <Button onClick={putNewTask} variant="contained" color="primary" style={{ marginLeft: 10 }}>
                Agregar
            </Button>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseSnackBar}>
                <Alert severity="error">
                    Falta o excede los caracteres permitidos
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ToDoAdd;