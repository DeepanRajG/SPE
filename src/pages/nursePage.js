import React from "react";
import {useEffect} from "react";
import {
    Container,
    Grid,
    Typography,
} from "@mui/material";
import afrin from "../img/afrin.png";
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
import {Cardd}  from "../component/card.jsx"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
    let options = ["Option 1","Option 1","Option 1"]
    let options1 = ["Laboratory","Radiology","Documents"]
    let options2 = ["Device", "Apps", "Bed / Rooms"]
    let options3 =["Order Meal / Status","My Diet Plan","Attender Plan"]
    let options4 =["Calls","Patient Schedules","Patient Care Team"]
    let options5 =["Scheduled Visits","Scheduled Activities","Option 3"]
    const bg_image = {
        height: "90vh",
        // width: '100vw'
    };
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
      const url = process.env.REACT_APP_QUERY_URL
      let response = await makeAPIpost(raw, url)
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
        prevArrow: <SamplePrevArrow sx={{height:"100px"}}  />,
        nextArrow: <SampleNextArrow sx={{height:"100px"}} />
      };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px",marginRight:"35px"}}
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
        <Container maxWidth="device-width" style={{ height: "100%", padding: "0px" }}>
            <Header name ="Afrin" profile={afrin} displayP="none"/>
            <Grid
                style={bg_image}
                sx={{
                    backgroundImage: `url(image/blur.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingLeft: "30px"
                }}
                container
            >
                <Grid item style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <Typography style={{marginLeft:"40px",marginTop:"50px",fontSize:"24px",fontFamily:"poppins",fontWeight:500,opacity:"0.70"}}>Logged In As Nr.Afrin</Typography>
                </Grid>
                <Grid item md={12} sx={{paddingLeft:"10px"}} >
                <Slider {...settings} >
                {Array.from(Array(TITLE.length)).map((_, index) => (
                  
            <Grid item xs={2} sm={2} md={12} lg={12} key={index} sx={{marginLeft:"10px",slignSelf:"center"}} >
              <Cardd sx={{padding: "10px 25px 15px 11px"}} title={TITLE} int={index} images={LOGO}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2,options3,options4,options5]} />
            </Grid>
            
          ))}
              </Slider> 
</Grid>
            </Grid>
        </Container>
    );
}
export default App;
