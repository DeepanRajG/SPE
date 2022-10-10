import React from "react";
import {
    Container,
    Grid,
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
    let [cardName, putCardName] = React.useState("Loading");
    let [cardNamea, putCardNamea] = React.useState("Loading");
    let [cardNameb, putCardNameb] = React.useState("Loading");
    let [cardNamec, putCardNamec] = React.useState("Loading");
    let [cardNamed, putCardNamed] = React.useState("Loading");
    let [cardNamee, putCardNamee] = React.useState("Loading");
    

    let [cardLogo0, putCardLogo0] = React.useState("Loading");
    let [cardLogo1, putCardLogo1] = React.useState("Loading");
    let [cardLogo2, putCardLogo2] = React.useState("Loading");
    let [cardLogo3, putCardLogo3] = React.useState("Loading");
    let [cardLogo4, putCardLogo4] = React.useState("Loading");
    let [cardLogo5, putCardLogo5] = React.useState("Loading");
    

    let title = [cardName, cardNamea, cardNameb, cardNamec, cardNamed, cardNamee]
    let images = [cardLogo0, cardLogo1, cardLogo2, cardLogo3, cardLogo4, cardLogo5]

    const raw = {
        "db_name": "ipmo",
        "entity": "spe_category",
        "return_fields": "keep(spe_category,'_id','_key','name','logo','url','status','appcredentials','dfltseq')",
        "sort": "spe_category._key"
    }

    const url = "https://arangodbservice.dev.ainqaplatform.in/api/read_documents"
    let fetchdata = async () => {
    let response = await makeAPIpost(raw, url)
        putCardName(response.result[9].name)
        putCardNamea(response.result[10].name)
        putCardNameb(response.result[11].name)
        putCardNamec(response.result[12].name)
        putCardNamed(response.result[2].name)
        putCardNamee(response.result[13].name)
    
        putCardLogo0(response.result[9].logo)
        putCardLogo1(response.result[10].logo)
        putCardLogo2(response.result[11].logo)
        putCardLogo3(response.result[12].logo)
        putCardLogo4(response.result[2].logo)
        putCardLogo5(response.result[13].logo)
       
        console.log(response);
    }
    fetchdata();
    const settings = {
        dots: false,
        slidesToShow: 5,
        slidestoScroll:5,
    infinite:false,
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
        <Container maxWidth="xl" style={{ height: "100%", padding: "0px" }}>
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
                <Grid item style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <h4>Logged In As NR.Afrin</h4>
                </Grid>
                <Grid item md={12} sx={{paddingLeft:"10px"}} >
                <Slider {...settings} >
                {Array.from(Array(title.length)).map((_, index) => (
                    <Grid>
            <Grid item  key={index}  sx={{marginLeft:"20px"}}>
              <Cardd title={title} int={index} images={images}  optionName={options1} optionsLength={options1.length} optionsAll={[options,options1,options2,options3,options4,options5]} />
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
