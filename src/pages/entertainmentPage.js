// 
import React from "react";
import {useEffect} from "react";
import "../index.css";
import {Container,Grid,} from "@mui/material";
import { makeAPIpost } from '../component/api.js';
<<<<<<< Updated upstream
import Entertainhead from '../component/Entertainhead.js'
import Entertain from '../component/Entertainbody.js'
import Header from "../component/header";
=======
import Entertainhead from './Entertainhead.js'
import {Entertain} from './Entertainbody.js'
import Header from "../component/headertest";
>>>>>>> Stashed changes
import tolly from "../img/dolly.png";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Menu from "../component/menu";
function  Entertaincomp() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
<<<<<<< Updated upstream
      const url1 = "https://arangodbservice.dev.ainqaplatform.in/api/execute_aql"






        let response = await makeAPIpost(raw, url1)
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            logo[i]= response[i].applogo
            url[i]= response[i].url
=======
      const url1 = process.env.REACT_APP_QUERY_URL
        let response = await makeAPIpost(raw, url1)
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          logo[i]= response[i].applogo
          url[i]= response[i].url
>>>>>>> Stashed changes
        }
        putdat(logo)
        puturl(url)
    }
    getData();
  }, [])
   
    return (
<<<<<<< Updated upstream
        <Container maxWidth="xl" style={{ height: "10%", padding: "0px" }}>
        <Header name ="Dolly Tan" profile={tolly}/>
=======
        <Container maxWidth="device-width" style={{ height: "100%", padding: "0px" }}>
        <Header name ="Dolly Tan" profile={tolly} displayP="flex"/>
>>>>>>> Stashed changes
      <Grid container >
      {!matches && <Entertainhead/>}
      {matches && <Menu/>}
          </Grid>
<<<<<<< Updated upstream
          <Grid container  direction="row" spacing={2} sx={{padding:"20px 20px 20px 30px"}}>
          <Grid item md={12} sx={{ height: "200px" }}>
             <Grid container direction="row" spacing={1} >
             <Grid container item  direction="row" spacing={2} sx={{padding:"20px 20px 20px 30px"}}>
=======
          <Grid container  direction="row" spacing={2} sx={{padding:{xl:"20px 20px 20px 0px",lg:"20px 20px 20px 0px",md:"20px 20px 20px 0px",sm:"20px 0px 20px 10px"}}}>
          <Grid item md={12}  sx={{ height: "200px" }}>
             <Grid container direction="row" spacing={1} >
             <Grid container item  direction="row" spacing={1} sx={{ textAlign:"center",marginTop:"5px"}} >
>>>>>>> Stashed changes
             {Array.from(Array(LOGO.length)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index} >
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