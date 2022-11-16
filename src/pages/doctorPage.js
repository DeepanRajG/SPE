import React from "react";
import {useEffect} from "react";
import {
  Grid, Typography,Box
  } from "@mui/material";
import Rakin from '../img/profile.png'
import { Cardd } from '../component/card.jsx'
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
function App() {
  const bg_image = {
    
    height: "92vh",
    // width: '100vw'
};
  let options = ["Option 1","Option 1","Option 1"]
  let options1 = ["Calls","My Appointments","My Care Team",]
  let options2 = ["Schedule Visits", "Schedules Activities", "Option 3"]
  let cardname=[]
  let cardlogo=[]
  let [LOGO, putlogo] = React.useState("");
  let [TITLE, puttitle] = React.useState("");
  useEffect(() => {
    let id=localStorage.getItem('perrolepermsnid')
    console.log(id);
    const getData = async () => {
      let permsn_repo=localStorage.getItem("permsn_repo")
      let array = permsn_repo.split(',');
    let raw1 = {
      "db_name": "ipmo",
      "query": "for doc in spe_category filter doc.rep_id IN ["+array.map(x => "'" + x + "'").toString()+"] return doc"
  }
      console.log(raw1)
      const url1 = process.env.REACT_APP_QUERY_URL
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
  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll:5,
infinite:false,
accessibility:true,
    // prevArrow: <SamplePrevArrow sx={{height:"100px"}}  />,
    nextArrow: <SampleNextArrow sx={{height:"50px"}} />
  };
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#00000029",alignSelf:"center",padding:"25px 10px",marginRight:"45px"}}
        onClick={onClick}
      />
    );
  }
  return (
    <>
     <Header name ="Rakin" profile={Rakin} displayP="none"/>
    <Grid maxWidth="device-width" position="static" style={{ height: "100%" }}>
   
       <Grid  container 
         style={{bg_image,marginTop:{xs:"80px",sm:"80px"}}}
         sx={{
           backgroundImage: `url(./image/doctorbg.png)`,
           backgroundSize: "cover ",
           backgroundPosition: "top center ",height:"100vh",
           backgroundRepeat:"no-repeat",
           }}> 
         <Grid item style={{display:"flex",justifyContent:"flex-start"}}>
           <Typography style={{marginLeft:"60px",marginTop:"60px",fontSize:"24px",fontFamily:"poppins",fontWeight:500,opacity:"0.90"}}>Logged In As Dr.Rakin</Typography>
         </Grid>
         <Grid container item sx={{display:"flex",justifyContent:"center",marginBottom:"180px"}}>
           
           {Array.from(Array(TITLE.length)).map((_, index) => (
             <Grid item  md={3} lg={3} xl={2} key={index} sx={{marginRight:{xl:"50px",lg:"50px",md:"50px",sm:"50px"},paddingBottom:{sm:"0px",xs:"0px"}}}>
               <Cardd title={TITLE} int={index} images={LOGO}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2]} />
             </Grid>
           ))}
         </Grid>
       </Grid>
     </Grid>
     </>
  );
}

export default App;


