import React from "react";
import {useEffect} from "react";
import "../index.css";
import {Container,Grid,} from "@mui/material";
import { makeAPIpost } from '../component/api.js';
import Entertainhead from './Entertainhead.js'
import Entertain from './Entertainbody.js'
import Headerr from "../component/headerr";
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
        let permsn_repo=localStorage.getItem("permsn_repo")
        let array = permsn_repo.split(',');
        const raw = {
          "db_name": "ipmo",
          "query": "for doc in spe_application filter doc.rep_id IN ["+array.map(x => "'" + x + "'").toString()+"] return doc",
      }
      console.log(raw);
      const url1 = process.env.REACT_APP_QUERY_URL
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
  console.log(LOGO);
    return (
        <Container maxWidth="device-width" style={{ height: "100%", padding: "0px" }}>
        <Headerr name ="Dolly Tan" profile={tolly} displayP="flex"/>
      <Grid container maxWidth="device-width">
      {!matches && <Entertainhead/>}
      {matches && <Menu/>}
          </Grid>
          <Grid container maxWidth="device-width" direction="row" spacing={2} sx={{padding:{xl:"20px 20px 20px 0px",lg:"20px 20px 20px 0px",md:"20px 20px 20px 0px",sm:"20px 0px 20px 10px"}}}>
          <Grid item md={12}  sx={{ height: "200px" }}>
             <Grid container direction="row" spacing={1} >
             <Grid container item  direction="row" spacing={1} sx={{ textAlign:"center",marginTop:"5px"}} >
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