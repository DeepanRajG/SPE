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
               
    let id=localStorage.getItem('perrolepermsnid')
    console.log(id);



        let raws = {

          "db_name": "ipmo",
      
          "query": "FOR adqolcIDM_PermissionManagement IN IDM_PermissionManagement FILTER adqolcIDM_PermissionManagement._id =='"+id+"' Return merge(adqolcIDM_PermissionManagement,{permsn_repo:(for IDM_permissionRepoMapping in IDM_permissionRepoMapping filter IDM_permissionRepoMapping._id in adqolcIDM_PermissionManagement.permsn_repo && IDM_permissionRepoMapping.activestatus==true && IDM_permissionRepoMapping.permsndelete==true return document(IDM_permissionRepoMapping.repoid)._id)})"
      
      }
        //console.log(raw)
        const urls = 'https://arangodbservice.dev.ainqaplatform.in/api/execute_aql'
      
        let responses = await makeAPIpost(raws, urls)
       
        console.log(responses[0].permsn_repo)
       // console.log(responses[0].permsn_repo);



   
        const raw = {
          "db_name": "ipmo",
          "query": "for doc in spe_application filter doc.rep_id IN ["+responses[0].permsn_repo.map(x => "'" + x + "'").toString()+"] return doc",
          
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