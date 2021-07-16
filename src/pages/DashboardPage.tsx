import React from "react";
<<<<<<< HEAD
import { Grid } from '@material-ui/core';
import Data from "../data";
import Inbox from '../components/Inbox';
import SearchTask from '../components/dashboard/searchTask'
import LeadsSidebar from '../components/dashboard/leadsSidebar'
import RightSection from '../components/dashboard/RightSection'
=======
import Data from "../data";
import { cyan, pink, purple, orange, grey } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

import RightSection from "../components/dashboard/RightSection";

const cyan600 = cyan["600"];
const pink600 = pink["600"];
const purple600 = purple["600"];
const orange600 = orange["600"];
const grey600 = grey["600"];
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058

const styles = {
  navigation: {
    fontSize: 15,
<<<<<<< HEAD
    fontWeight: 400, 
    color: "grey600",
    // paddingBottom: 15,
=======
    fontWeight: 400,
    color: grey600,
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
    display: "block",
  },
  cell: {
    padding: "0.5em",
  }
};


const DashboardPage = () => {
  return (
<<<<<<< HEAD
    <>
      <Grid container >
        <Grid item xs={12} md={3} style={{height: '819px'}}>
          <LeadsSidebar data={Data.dashBoardPage.rightSection} />
        </Grid>
        <Grid item container xs={12} md={9}>
          <Grid item xs={12}  >
            <SearchTask/>
          </Grid>
          <Grid item container style={{height: `calc(100% - 50px * 2)`}} >
            <Grid item style={styles.cell} xs={12} md={8}>
              <Inbox />
            </Grid>
            <Grid item style={styles.cell} xs={12} md={4} >
              <RightSection data={Data.dashBoardPage.rightSection} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
=======
    <div style={styles.content}>
      <Grid container style={styles.container} spacing={3}>
        <Grid item style={styles.cell} xs={12} sm={6} md={6} lg={9}></Grid>
        <Grid item style={styles.cell} xs={12} sm={6} md={6} lg={3}>
          <RightSection 
            data1={Data.dashBoardPage.rightSection.information} 
            data2={Data.dashBoardPage.rightSection.appointment} />
        </Grid>
>>>>>>> 291d56eba4316045d6fcc578e3f90dfccc592058
      </Grid>
    </>
  );
};

export default DashboardPage;
