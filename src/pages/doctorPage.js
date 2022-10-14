import React from "react";
import {useEffect} from "react";
import {
    Container,
  Grid, Typography,
  } from "@mui/material";
import Rakin from '../img/profile.png'
import { Cardd } from '../component/card.jsx'
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  
  const bg_image = {
    maxHeight: "100%",
    height: "90vh",
    // width: '100vw'
};

  let options = ["Option 1","Option 1","Option 1"]
  let options1 = ["Calls","My Appointments","My Care Team",]
  let options2 = ["Schedule Visits", "Schedules Activities", "Option 3"]
  let options3 =["Order Meal / Status","My Diet Plan","Attender Plan"]
  let options4 =["Calls","Patient Schedules","Patient Care Team"]
  let options5 =["Scheduled Visits","Scheduled Activities","Option 3"]
  let cardname=[]
  let cardlogo=[]
 

  let [LOGO, putlogo] = React.useState("");
  let [TITLE, puttitle] = React.useState("");


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
    localStorage.setItem("permsn_repo",response[0].permsn_repo)


   
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

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll:3,
infinite:false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px",marginRight:"30px"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px"}}
        onClick={onClick}
      />
    );
  }
  return (
    <Container maxWidth="xl" style={{ height: "100%", padding: "0px" }}>
       <Header name ="Rak in" profile={Rakin} displayP="none"/>
        <Grid
            style={bg_image}
            sx={{
                backgroundImage: `url(./image/background.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingLeft: "30px"

            }}
            container
           
        > 
            <Grid item style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Typography style={{marginLeft:"40px",marginTop:"40px",fontSize:"20px"}}>Logged In As Dr.Rakin</Typography>
            </Grid>
            <Grid item md={12} >
            <Slider {...settings} >
            {Array.from(Array(TITLE.length)).map((_, index) => (
                <Grid>
        <Grid item  key={index}  sx={{marginLeft:"25px"}}>
          <Cardd title={TITLE} int={index} images={LOGO}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2,options3,options4,options5]} />
        </Grid>
        </Grid>
      ))}
          </Slider> 
</Grid>
        </Grid>
    </Container>
);
}
export default App;