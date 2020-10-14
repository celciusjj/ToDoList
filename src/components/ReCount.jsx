import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function ReCount(props) {
    const [incompletes, setIncompletes] = useState("");
    const [completes, setCompletes] = useState("");
    const [all, setAll] = useState(props.tasks.length);
    const [eliminated, setEliminated] = useState("");

    const filterByCompleted = () => {
        let result = props.tasks.filter(item => item.isCompleted === true)
        console.log(result)
        setCompletes(result.length)
    }

    const filterByIncompletes = () => {
        let result = props.tasks.filter(item => item.isCompleted !== true)
        setIncompletes(result.length)
    }

    const filterByEliminated = () => {
        let result = props.tasks.filter(item => item.isDeleted === true)
        setEliminated(result.length)
    }

    const filterByAll = () => {
        setAll(props.tasks.length)
    }

    useEffect(() => {
        filterByCompleted();
        filterByIncompletes();
        filterByEliminated();
        filterByAll();
    })


    return (
        <Grid container style={{ marginTop: 20 }}>
            <Grid  xs={12}>
                <Grid container justify="center">
                    <Grid item style={{ textAlign: "center", marginRight: 20 }}>
                        <Typography variant="h5" >
                            Incompletos
                        </Typography>
                        <Typography style={{ color: "orange" }} variant="h4" >
                            {incompletes}
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center", marginRight: 20 }}>
                        <Typography variant="h5" >
                            Totales
                        </Typography>
                        <Typography style={{ color: "darkblue" }} variant="h4" >
                            {all}
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center", marginRight: 20 }}>
                        <Typography variant="h5" >
                            Completados
                        </Typography>
                        <Typography style={{ color: "green" }} variant="h4" >
                            {completes}
                        </Typography>
                    </Grid>
                    <Grid item style={{ textAlign: "center", marginRight: 20}}>
                        <Typography variant="h5" >
                            Eliminados
                        </Typography>
                        <Typography style={{ color: "red" }} variant="h4" >
                            {eliminated}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ReCount;