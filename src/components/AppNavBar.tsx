import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color:"red",
<<<<<<< HEAD
    display:"inline",
    fontWeight:"bold",
  },
  toolbar: {
    minHeight: 0,
    maxHeight:45,
  },
  button:{
    backgroundColor: "white",
    borderRadius: 0,
    marginLeft:"-23px",
=======
    height:'45px',
  },
  toolbar: {
    minHeight: 0,
    height:45,
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
  },
}));

interface AppNavBarProps {
  handleDrawerToggle: () => void;
  styles: TODO;
}
// class Header extends React.Component {
const AppNavBar: React.FC<AppNavBarProps> = ({ styles, handleDrawerToggle}) => {
<<<<<<< HEAD
=======
const handleClick = () => {
    // window.open(
    //   "https://github.com/harryho/react-crm",
    //   undefined,
    //   undefined,
    //   false
    // );
  };

  let style = useStyles(styles);

>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
  
  let style = useStyles(styles);

  return (
    <div>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar variant="dense" className={styles.toolbar}>
          <IconButton
            edge="start"
               onClick={handleDrawerToggle}
            color="inherit"
            aria-label="menu"
            className={style.button}
          >
            <Typography variant="h4"  className={style.title}>
              S
            </Typography>
          </IconButton>
<<<<<<< HEAD
          <Typography variant="h4" style={{paddingLeft:"5px"}} >
            Drive
          </Typography>
=======
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;
