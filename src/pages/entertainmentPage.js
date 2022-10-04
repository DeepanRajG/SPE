import React from "react";
import "../index.css";
import {
    Container,
    Grid,
} from "@mui/material";
import { makeAPIpost } from '../component/api.js';
import Entertainhead from './Entertainhead.js'
import Entertain from './Entertainbody.js'
import Header from "../component/header";
import tolly from "../img/dolly.png";
var one=true;
function  Entertaincomp() {
    let [LOGO, putdat] = React.useState("Loading");
    let [URL, puturl] = React.useState("Loading");
    let logo=[]
    let url=[]
    const raw = {
        "db_name": "ipmo_spe",
        "entity": "spe_application",
        "return_fields": "merge(keep(spe_application,'_id','_key','appname','applogo','url','status','dfltsequence','sublink'),{categoryid:document(spe_application.categoryid)})",
        "sort": "spe_application.dfltsequence"
    }
    const url1 = "https://arangodbservice.dev.ainqaplatform.in/api/read_documents"
    let fetchdata = async () => {
        let response = await makeAPIpost(raw, url1)
        for (let i = 0; i < response.result.length; i++) {
            logo[i]= response.result[i].applogo
            url[i]= response.result[i].url
        }
        putdat(logo)
        puturl(url)
    }
    if(one){
        fetchdata();
    }
    return (
        <Container maxWidth="xl" style={{ height: "10%", padding: "0px" }}>
        <Header name ="Dolly Tan" profile={tolly}/>
      <Grid container >
        <Entertainhead/>
          </Grid>
          <Grid container  direction="row" spacing={2} sx={{padding:"20px 10px 20px 10px"}}>
   <Grid item md={12} sx={{ height: "200px" }}>
             <Grid container direction="row" spacing={1} >
             <Grid container item  direction="row" spacing={2} sx={{padding:"20px 10px 20px 10px"}}>
             {Array.from(Array(LOGO.length)).map((_, index) => (
            <Grid item xs={3} sm={3} md={3} lg={3} key={index} >
              <Entertain src={LOGO} int={index} url={URL}/>
            </Grid>
          ))}
          </Grid>
          </Grid>
          </Grid>
          </Grid>
          </Container>
         );
        }
        export default Entertaincomp;