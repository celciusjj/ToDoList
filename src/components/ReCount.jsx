import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ReCount() {
    return (
        <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={10}>
                    <Grid item style={{textAlign: "center"}}>
                        <Typography variant="h5" component="h2">
                            Incompletos
                        </Typography>
                        <Typography style={{color: "orange"}} variant="h4" component="h2">
                            5
                        </Typography>
                    </Grid>
                    <Grid item style={{textAlign: "center"}}>
                        <Typography variant="h5" component="h2">
                            Completados
                        </Typography>
                        <Typography style={{color: "green"}} variant="h4" component="h2">
                            5
                        </Typography>
                    </Grid>
                    <Grid item style={{textAlign: "center"}}>
                        <Typography variant="h5" component="h2">
                            Eliminados
                        </Typography>
                        <Typography style={{color: "red"}} variant="h4" component="h2">
                            5
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ReCount;