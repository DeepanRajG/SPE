import React from "react";
import {useEffect} from "react";
import "../index.css";
import {Container,Grid,} from "@mui/material";
import { makeAPIpost } from '../component/api.js';
import Entertainhead from './Entertainhead.js'
import Entertain from './Entertainbody.js'
import Header from "../component/header";
import tolly from "../img/dolly.png";
function  Entertaincomp() {
    let [LOGO, putdat] = React.useState("Loading");
    let [URL, puturl] = React.useState("Loading");
    let logo=[]
    let url=[]



    useEffect(() => {
      const getData = async () => {
               
        let permsn_repo=localStorage.getItem("permsn_repo")
        let array = permsn_repo.split(',');
      
   
   
        const raw = {
          "db_name": "ipmo",
          "query": "for doc in spe_application filter doc.rep_id IN ["+array.map(x => "'" + x + "'").toString()+"] return doc",
          
      }
      console.log(raw);
      const url1 = "https://arangodbservice.dev.ainqaplatform.in/api/execute_aql"






        let response = await makeAPIpost(raw, url1)
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            logo[i]= response[i].applogo
            url[i]= response[i].url
        }
        putdat(logo)
        puturl(url)
    }
    getData();
  }, [])
   
    return (
        <Container maxWidth="xl" style={{ height: "10%", padding: "0px" }}>
        <Header name ="Dolly Tan" profile={tolly}/>
      <Grid container >
        <Entertainhead/>
          </Grid>
          <Grid container  direction="row" spacing={2} sx={{padding:"20px 20px 20px 30px"}}>
          <Grid item md={12} sx={{ height: "200px" }}>
             <Grid container direction="row" spacing={1} >
             <Grid container item  direction="row" spacing={2} sx={{padding:"20px 20px 20px 30px"}}>
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