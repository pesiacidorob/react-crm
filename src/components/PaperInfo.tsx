import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Grid, IconButton, withStyles  } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({   
    bd: {
        margin: '5px',
        backgroundColor: '#fff4fb'
    },
    mg: {
        margin: '5px',
        backgroundColor: '#fff4fb'
=======
const useStyles = makeStyles((theme) => ({    
    mg: {
        margin: '5px',
        backgroundColor: '#fce4ec'
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
    },
    typoPad: {
        paddingLeft: '10px'
    },
    align: {
        textAlign: 'right'
    },
    iconPad: {
        padding: '2px'
    },
    topPad: {
        paddingTop: '10px'
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
}));

const theme = createMuiTheme({
    typography: {
      fontSize: 10,      
    },
  });
const GlobalCss = withStyles({
    '@global': {
        '.MuiSvgIcon-root': {
            fontSize: 'large'
        }
    }
})(() => null);

export default function PaperInfo(props){
    const classes = useStyles();
<<<<<<< HEAD
    return (
        <Paper className={classes.mg} elevation={3}>
            <Grid item container xs={12} className={classes.topPad}>
=======
    return (        
        <Paper className={classes.mg} elevation={3}>
            <Grid container xs={12} md={12} className={classes.topPad}>
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
                {props.data.map((item) => (
                    <Grid item xs={6} className={classes.typoPad}>
                        <ThemeProvider theme={theme}>
                            <Typography display="inline">{item.name}</Typography>
                            <Typography display="inline">{item.value}</Typography>
                        </ThemeProvider>
                    </Grid>
                ))} 
            </Grid>
<<<<<<< HEAD
            <Grid item className={classes.align}>
=======
            <Grid className={classes.align}>
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
                <GlobalCss/>
                <IconButton aria-label="AddCircleOutline" className={classes.iconPad}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Grid>
        </Paper>     
    )
};