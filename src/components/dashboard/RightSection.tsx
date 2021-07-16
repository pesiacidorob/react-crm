<<<<<<< HEAD
import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import PaperInfo from '../PaperInfo';
import Datepicker from "../Datepicker";
import FullWidthTabs from "../FullWidthTabs";
=======
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import Datepicker from "../Datepicker";
import Paper from "@material-ui/core/Paper";
import FullWidthTabs from "../FullWidthTabs";
import PaperInfo from '../PaperInfo';
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 'auto',
<<<<<<< HEAD
        height: '100%',
        marginTop: 8
=======
        height: '100%'
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
    }
}));

const selectedDay = (val) =>{
    console.log(val)
  };
  
export default function RightSection(props){
    const classes = useStyles();
    return (
        <Paper className={classes.root}  elevation={3}>
            <Datepicker
                beforeDate={3} 
<<<<<<< HEAD
                endDate={6} 
                selectDate={""}
                getSelectedDay={selectedDay} 
                labelFormat={"MMMM yyyy E"} 
                color={"#374e8c"} 
                language={"en"}
            />
            <PaperInfo data={props.data.information} />            
            <FullWidthTabs data={props.data.appointment} />
        </Paper>        
    );
=======
                endDate={15} 
                selectDate={""}
                getSelectedDay={selectedDay} 
                labelFormat={"MMMM yyyy"} 
                color={"#374e8c"} 
                language={"en"} />
            <PaperInfo data={props.data1} />            
            <FullWidthTabs data={props.data2} />
        </Paper>
        
    );

>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
};