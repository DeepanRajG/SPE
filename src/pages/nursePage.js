import React from "react";
import {
    Container,
    Grid,
} from "@mui/material";
import logo from "../img/logo.png";
import union from '../img/Union .svg'
import headset from '../img/headset .png'
import timetable from '../img/Timetable.png'
import system from "../img/System.png";
import statistics from "../img/statistics.png";
import afrin from "../img/afrin.png";
import Header from "../component/header";
import {Cardd}  from "../component/card.jsx"

function App() {
   
    let title = ["TPP", "Chart & Results", "Manage","Meal Order","Smart Assist","Timetable"]
    let images=[union,statistics,system,logo,headset,timetable]
    let options = ["Option 1","Option 1","Option 1"]
    let options1 = ["Laboratory","Radiology","Documents"]
    let options2 = ["Device", "Apps", "Bed / Rooms"]
    let options3 =["Order Meal / Status","My Diet Plan","Attender Plan"]
    let options4 =["Calls","Patient Schedules","Patient Care Team"]
    let options5 =["Scheduled Visits","Scheduled Activities","Option 3"]
    const bg_image = {
        height: "90vh",
        // width: '100vw'
    };
return (
        <Container maxWidth="xl" style={{ height: "100%", padding: "0px" }}>
            <Header name ="Afrin" profile={afrin} displayP="none"/>
            <Grid
                style={bg_image}
                sx={{
                    backgroundImage: `url(image/blur.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingLeft: "30px"

                }}
                container
            >
                <Grid item style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <h4>Logged In As NR.Afrin</h4>
                </Grid>
                <Grid container >
          <Grid item container direction="row">
          {Array.from(Array(title.length)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} lg={2} key={index} spacing={1}>
              <Cardd title={title} int={index} images={images}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2,options3,options4,options5]} />
            </Grid>
          ))}
         </Grid>
</Grid>
            </Grid>
        </Container>
    );
}
export default App;
