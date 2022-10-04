import React from "react";
import "../index.css";
import {
  Container,

  Grid,
  Box,

  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import {makeAPIpost} from '../component/api.js';

import WestIcon from "@mui/icons-material/West";
import Header from "../component/header";
import Youtube from "../img/youtube.png";
import Netflix from "../img/netflix.png";
import Disney from "../img/disney.png";
import Prime from "../img/prime.png";
import Spotify from "../img/spotify.png";
import Max from "../img/max.png";
import Peacock from "../img/peacock.png";
import Apple from "../img/appletv.png";
import Starz from "../img/starz.png";
import Paramount from "../img/paramount.png";
import Hulu from "../img/hulu.png";
import Redbull from "../img/redbull.png";
import tolly from "../img/dolly.png";
import { useNavigate } from "react-router-dom";


function App() {
    const navigate = useNavigate();
  const [value, setValue] = React.useState("one");

  const handleChange = ( newValue) => {
    setValue(newValue);
    
  };
  
  let [cardName,putdat]=React.useState("Loading");
  
  
  let [cardNameu,puturl]=React.useState("Loading");


  const raw ={
    
        "db_name": "ipmo_spe",
        "entity": "spe_application",
      
        "return_fields": "merge(keep(spe_application,'_id','_key','appname','applogo','url','status','dfltsequence','sublink'),{categoryid:document(spe_application.categoryid)})",
      
        "sort": "spe_application.dfltsequence"
      
      
    }
    
    const url1="https://arangodbservice.dev.ainqaplatform.in/api/read_documents"
    let fetchdata = async()=>{
        let response = await makeAPIpost(raw,url1)
    
            let datta=response
            let dat=response.result[0].applogo
           let url=response.result[0].url
             console.log(datta)
            console.log (dat)
            var d  = JSON.stringify(url)
            console.log(d)
            putdat(dat)
            puturl(d)
    }
        
        fetchdata();
    
  

const onclickyoutube =()=>{
   window.open({cardNameu});
   alert(cardNameu)
}
const onclicknetflix =()=>{
    window.open("https://www.netflix.com");
 }
 const onclickdisney=()=>{
    window.open("https://www.hotstar.com")
 }
 const onclickprime=()=>{
    window.open("https://www.primevideo.com/")
 }
 const onclickspotify=()=>{
    window.open("https://www.spotify.com")
 }
 const onclickmax=()=>{
    window.open("https://www.hbomax.com/")
 }
 const onclickpeacock=()=>{
    window.open("https://www.peacocktv.com/")
 }
 const onclickapple=()=>{
    window.open("https://tv.apple.com/")
 }
 const onclickstarz=()=>{
    window.open("https://www.starz.com/")
 }
 
 const onclickpara=()=>{
    window.open("https://www.paramountplus.com/")
 }
 const onclickhulu=()=>{
    window.open("https://www.hulu.com/")
 }

 const onclickredbull=()=>{
    window.open("https://www.redbull.com/")
 }

 const back =()=>{
    navigate("/patient")
 }
 const box ={
    width:"60px",
    height: "180px"
 }

  return (
    <Container maxWidth="xl" style={{ height: "10%", padding: "0px" }}>
        <Header name ="Dolly Tan" profile={tolly}/>
      <Grid container >
        <Grid container item md={7} direction="row" sx={{padding:"10px"}} >
          <Grid>
            <WestIcon onClick={back} sx={{ margin: "10px",marginTop:"13px",marginLeft:"20px" }} />
          </Grid>
          <Grid>
            <Typography
              sx={{
                margin: "10px 10px 10px 0px",
                fontWeight: "500",
                fontSize:"20px",
                "&:hover": { fontColor: "black" },
              }}
            >
              Entertainment
            </Typography>
          </Grid>
 </Grid>  
        <Grid item md={5} sx={{padding:"10px",}}>
            <Grid  container >
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style:{background:"black"}}} textColor="Black" >
            <Tab sx={{minWidth: "100px"}} value="one" label="All" />
            <Tab sx={{minWidth: "100px"}} value="two" label="Movies" />
            <Tab sx={{minWidth: "100px"}} value="three" label="Music" />
            <Tab sx={{minWidth: "100px"}} value="four" label="Series" />
            <Tab sx={{minWidth: "100px"}} value="five" label="Sports" />
            <Tab sx={{minWidth: "100px"}} value="six" label="Cartoons" />
          </Tabs>
            </Grid>
          
        </Grid>
      </Grid>
   
        <Grid container  direction="column" spacing={2} sx={{padding:"20px 30px 20px 30px"}}>
          <Grid item md={4} sx={{ height: "200px" }}>
            <Grid container direction="row" spacing={1} >
                 
              <Grid item  md={3}  sx={box} onClick={onclickyoutube}>
              <Box component="img" src={cardName} sx={{height:"100%",width:"100%"}}/>
              </Grid>
              <Grid item md={3}   sx={box} onClick={onclicknetflix}>
              <Box component="img" src={Netflix} sx={{height:"100%",width:"100%"}}/>

              </Grid>
              <Grid item md={3}  sx={box} onClick={onclickdisney}>
              <Box component="img" src={Disney} sx={{height:"100%",width:"100%"}}/>

              </Grid>
              <Grid item md={3}  sx={box} onClick={onclickprime}>
              <Box component="img" src={Prime} sx={{height:"100%",width:"100%"}}/>

              </Grid>
            </Grid>
          
           
          </Grid>
          <Grid  item md={4} sx={{ height: "200px" }}>
           <Grid container direction="row" spacing={1} >
                 
                 <Grid item md={3} sx={box}>
              <Box component="img" src={Spotify} sx={{height:"100%",width:"100%"}} onClick={onclickspotify}/> 
                 </Grid>
                 <Grid item md={3}  sx={box}>
              <Box component="img" src={Max} sx={{height:"100%",width:"100%"}} onClick={onclickmax}/>
                 </Grid>
                 <Grid item md={3}  sx={box}>
              <Box component="img" src={Peacock} sx={{height:"100%",width:"100%"}} onClick={onclickpeacock}/>
                 </Grid>
                 <Grid item md={3}  sx={box}>
              <Box component="img" src={Apple} sx={{height:"100%",width:"100%"}} onClick={onclickapple}/>
                 </Grid>
               </Grid> 
          </Grid>
          <Grid  item md={4} sx={{height: "200px" }}>
          <Grid container direction="row" spacing={1} >
                <Grid item md={3} sx={box}>
              <Box component="img" src={Starz} sx={{height:"100%",width:"100%"}} onClick={onclickstarz}/> 
                </Grid>
                 <Grid item md={3}  sx={box}>
              <Box component="img" src={Paramount} sx={{height:"100%",width:"100%"}} onClick={onclickpara}/> 
                 </Grid>
                 <Grid item md={3}  sx={box}>
              <Box component="img" src={Hulu} sx={{height:"100%",width:"100%"}} onClick={onclickhulu}/> 
                 </Grid>
                 <Grid item md={3}  sx={box}>
              <Box component="img" src={Redbull} sx={{height:"100%",width:"100%"}} onClick={onclickredbull}/> 
                 </Grid>
               </Grid> 
          </Grid>
        </Grid>
      
    </Container>
  );
}
export default App;
