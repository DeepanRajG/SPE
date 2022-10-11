import React from "react";
import {useEffect} from "react";
import {
  Grid, Typography,
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

  let cardname=[]
  let cardlogo=[]
 

  let [LOGO, putlogo] = React.useState("Loading");
  let [TITLE, puttitle] = React.useState("Loading");


  useEffect(() => {
        
    let id=localStorage.getItem('perrolepermsnid')
    console.log(id);
    const getData = async () => {
    let raw = {

      "db_name": "ipmo",
  
      "query": "FOR adqolcIDM_PermissionManagement IN IDM_PermissionManagement FILTER adqolcIDM_PermissionManagement._id =='"+id+"' Return merge(adqolcIDM_PermissionManagement,{permsn_repo:(for IDM_permissionRepoMapping in IDM_permissionRepoMapping filter IDM_permissionRepoMapping._id in adqolcIDM_PermissionManagement.permsn_repo && IDM_permissionRepoMapping.activestatus==true && IDM_permissionRepoMapping.permsndelete==true return document(IDM_permissionRepoMapping.repoid)._id)})"
  
  }
    console.log(raw)
    const url = 'https://arangodbservice.dev.ainqaplatform.in/api/execute_aql'
  
    let response = await makeAPIpost(raw, url)
   
    console.log(response[0].permsn_repo)


   
      let raw1 = {

        "db_name": "ipmo",
    
        "query": "for doc in spe_category filter doc.rep_id IN ["+response[0].permsn_repo.map(x => "'" + x + "'").toString()+"] return doc"
    
    }
      console.log(raw1)
      const url1 = 'https://arangodbservice.dev.ainqaplatform.in/api/execute_aql'
    
      let response1 = await makeAPIpost(raw1, url1)
      console.log(response1)
      let responseData=response1

      for (let i = 0; i < responseData.length; i++) {
        cardname[i]= responseData[i].name
        cardlogo[i]= responseData[i].logo
    }
    console.log(responseData)
    putlogo(cardlogo)
    puttitle(cardname)


  

  }












      
   
   
    getData();
  }, [])







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
          <Typography style={{marginLeft:"40px",marginTop:"40px",fontSize:"20px"}}>Logged In As Dr.Rakin</Typography>
        </Grid>
        <Grid container item sx={{display:"flex",justifyContent:"center"}}>
          {Array.from(Array(TITLE.length)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} lg={2} key={index} >
              <Cardd title={TITLE} int={index} images={LOGO}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App;