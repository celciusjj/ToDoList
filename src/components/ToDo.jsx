import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import ToDoEdit from "./ToDoEdit"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-around"
    },
}));

function ToDo(props) {
    const [checked, setChecked] = React.useState(props.isCompleted);
    const [isOpen, setOpen] = React.useState(false);

    const handleChangeCheckBox = () => {
        props.finishTask(props.uuid)
        setChecked(true);
        console.log(props)
    };

    const handleEdit = () => {

    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ToDoEdit open={isOpen} setOpen={setOpen} uuid={props.uuid} text={props.text} editTask={props.editTask}/>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChangeCheckBox}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                {props.text}
                            </Grid>
                            <Grid item >
                                <Button onClick={() => setOpen(true)} style={{ marginRight: 10 }} variant="contained" color="primary">
                                    Editar
                                </Button>
                                <Button onClick={() => props.removeTask(props.uuid)} variant="contained" color="secondary">
                                    Borrar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ToDo;