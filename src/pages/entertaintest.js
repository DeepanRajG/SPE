
import DrawerComponent from "../component/drawer.js";
import React from "react";
import { useEffect } from "react";
import "../index.css";
import { Container, Grid} from "@mui/material";
import { makeAPIpost } from '../component/api.js';
import Header from "../component/headertest";
import Entertainhead from './entertaintesthead.js';
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Menu from "../component/menu";
import {Entertainn} from './Entertainbody.js';
import {Entertain }from './Entertainbody.js'
import tolly from "../img/dolly.png";
import net from "../img/mnetflix.png";

function Entertaincomp() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchess = useMediaQuery(theme.breakpoints.down("sm"));
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isMobilee = useMediaQuery(theme.breakpoints.down("sm"));
  let [LOGO, putdat] = React.useState("Loading");
  let [URL, puturl] = React.useState("Loading");
  let logo = []
  let url = []
  useEffect(() => {
    const getData = async () => {
      let permsn_repo = localStorage.getItem("permsn_repo")
      let array = permsn_repo.split(',');
      const raw = {
        "db_name": "ipmo",
        "query": "for doc in spe_application filter doc.rep_id IN [" + array.map(x => "'" + x + "'").toString() + "] return doc",
      }
      console.log(raw);
      const url1 = process.env.REACT_APP_QUERY_URL
      let response = await makeAPIpost(raw, url1)
      console.log(response);

      for (let i = 0; i < response.length; i++) {


        logo[i] = response[i].applogo

        url[i] = response[i].url



      }
      putdat(logo)
      puturl(url)

    }
    getData();
  }, [])
  console.log(LOGO);
  return (

    <Container maxWidth="deviceWidth" style={{ height: "100%", padding: "0px" }}>
{isMobile ? (
          <DrawerComponent profile={tolly}/>         
        ) : (
            <Header name="Dolly Tan" profile={tolly} displayP="flex" />)}
      <Grid container maxWidth="deviceWidth">
        {!matches && <Entertainhead />}
        {matches && <Menu />}
      </Grid>

      <Grid container  spacing={2}  style={{padding: " 50px 50px 0px 30px"}}>

        {Array.from(Array(9)).map((_, index) => (
          <Grid item md={4} lg={3} xl={3} key={index} >
            {!matchess && <Entertain src={LOGO} int={index} url={URL} />}
            {matchess && <Entertainn />}
          </Grid>
        ))}
      </Grid>
 

    </Container>


  );
}
export default Entertaincomp;
