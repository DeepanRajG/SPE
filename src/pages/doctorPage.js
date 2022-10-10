import React from "react";
import {
  Grid,
  } from "@mui/material";
import Rakin from '../img/profile.png'
import { Cardd } from '../component/card.jsx'
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
function App() {
  
  const bg_image = {
    maxHeight: "100%",
    height: "90vh",
    // width: '100vw'
};

  let options = ["Option 1","Option 1","Option 1"]
  let options1 = ["Calls","My Appointments","My Care Team",]
  let options2 = ["Schedule Visits", "Schedules Activities", "Option 3"]

  let [cardName, putCardName] = React.useState("Loading");
  let [cardNamea, putCardNamea] = React.useState("Loading");
  let [cardNameb, putCardNameb] = React.useState("Loading");

  let [cardLogo0, putCardLogo0] = React.useState("Loading");
  let [cardLogo1, putCardLogo1] = React.useState("Loading");
  let [cardLogo2, putCardLogo2] = React.useState("Loading");

  let title = [cardName, cardNamea, cardNameb]
  let images = [cardLogo0, cardLogo1, cardLogo2]
  const raw = {
    "db_name": "ipmo",
    "entity": "spe_category",
    "return_fields": "keep(spe_category,'_id','_key','name','logo','url','status','appcredentials','dfltseq')",
    "sort": "spe_category._key"
}

const url = "https://arangodbservice.dev.ainqaplatform.in/api/read_documents"
let fetchdata = async () => {
let response = await makeAPIpost(raw, url)
    putCardName(response.result[9].name)
    putCardNamea(response.result[2].name)
    putCardNameb(response.result[13].name)
  
    putCardLogo0(response.result[9].logo)
    putCardLogo1(response.result[2].logo)
    putCardLogo2(response.result[13].logo)
   
    console.log(response);
}
fetchdata();
  return (
    <Grid maxWidth="xl" style={{ height: "100%" }}>
   <Header name ="Rakin" profile={Rakin} displayP="none"/>
      <Grid  container
        style={bg_image}
        sx={{
          backgroundImage: `url(./image/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          }}> 
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