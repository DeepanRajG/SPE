import React from "react";
import {
  Grid,
  } from "@mui/material";
import  union from '../img/Union .svg'
import stadistics from '../img/statistics.png'
import timetable from '../img/Timetable.png'
import Rakin from '../img/profile.png'
import { Cardd } from '../component/card.jsx'
import Header from "../component/header";
function App() {
  console.log(union);
  const bg_image = {
    maxHeight: "100%",
    height: "90vh",
    // width: '100vw'
};

  let title = ["TPP", "Smart Assist", "TimeTable"]
  let images=[union,stadistics,timetable]
  let options = ["Option 1","Option 1","Option 1"]
  let options1 = ["Calls","My Appointments","My Care Team",]
  let options2 = ["Schedule Visits", "Schedules Activities", "Option 3"]
  return (
    <Grid maxWidth="xl" style={{ height: "100%" }}>
   <Header name ="Rakin" profile={Rakin} displayP="none"/>
      <Grid 
        style={bg_image}
        sx={{
          backgroundImage: `url(./image/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
        container
      >
        <Grid item style={{margin:"20px 0px 0px 20px",fontSize:"20px"}}>
          <h3>Logged In as Dotor</h3>
        </Grid>
        <Grid container item sx={{display:"flex",justifyContent:"center"}}>
          {Array.from(Array(title.length)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} lg={2} key={index} >
              <Cardd title={title} int={index} images={images}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App;