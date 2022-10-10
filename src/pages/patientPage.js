import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Container,
    Grid,
    Button,
    Typography
} from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import tolly from '../img/dolly.png';
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
import { Cardd } from "../component/card.jsx"

function Patient() {

    let options = ["Option 1", "Option 1", "Option 1"]
    let options1 = ["Order Meal / Status", "My Diet Plan", "Attender Plan"]
    let options2 = ["Join Calls", "Scheduled Calls", "Option 3"]
    let options3 = []
    let options4 = ["Laboratory", "Radiology", "Documents"]
    let options5 = ["Scheduled Visits", "Scheduled Activities", "Option 3"]
    /////////////////////////////
    let [cardName, putCardName] = React.useState("Loading");
    let [cardNamea, putCardNamea] = React.useState("Loading");
    let [cardNameb, putCardNameb] = React.useState("Loading");
    let [cardNamec, putCardNamec] = React.useState("Loading");
    let [cardNamed, putCardNamed] = React.useState("Loading");
    let [cardNamee, putCardNamee] = React.useState("Loading");
    let [cardNamef, putCardNamef] = React.useState("Loading");

    let [cardLogo0, putCardLogo0] = React.useState("Loading");
    let [cardLogo1, putCardLogo1] = React.useState("Loading");
    let [cardLogo2, putCardLogo2] = React.useState("Loading");
    let [cardLogo3, putCardLogo3] = React.useState("Loading");
    let [cardLogo4, putCardLogo4] = React.useState("Loading");
    let [cardLogo5, putCardLogo5] = React.useState("Loading");
    let [cardLogo6, putCardLogo6] = React.useState("Loading");

    let title = [cardName, cardNamea, cardNameb, cardNamec, cardNamed, cardNamee, cardNamef]
    let images = [cardLogo0, cardLogo1, cardLogo2, cardLogo3, cardLogo4, cardLogo5, cardLogo6]

    const raw = {
        "db_name": "ipmo",
        "entity": "spe_category",
        "return_fields": "keep(spe_category,'_id','_key','name','logo','url','status','appcredentials','dfltseq')",
        "sort": "spe_category._key"
    }

    const url = "https://arangodbservice.dev.ainqaplatform.in/api/read_documents"

    let fetchdata = async () => {
        let response = await makeAPIpost(raw, url)

        putCardName(response.result[0].name)
        putCardNamea(response.result[1].name)
        putCardNameb(response.result[2].name)
        putCardNamec(response.result[3].name)
        putCardNamed(response.result[4].name)
        putCardNamee(response.result[5].name)
        putCardNamef(response.result[6].name)

        putCardLogo0(response.result[0].logo)
        putCardLogo1(response.result[1].logo)
        putCardLogo2(response.result[2].logo)
        putCardLogo3(response.result[3].logo)
        putCardLogo4(response.result[4].logo)
        putCardLogo5(response.result[5].logo)
        putCardLogo6(response.result[6].logo)
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
            style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px" }}
            onClick={onClick}
          />
        );
      }
      
      

    return (
        <Container maxWidth="xl" style={{ height: "100%", padding: "0px" }}>
            <Header name="Dolly Tan" profile={tolly} displayP="flex" />
            <Grid direction="column" container marginTop="20px" >
                <Container sx={{
              height: 900,
              width: 1500,
              maxHeight: { xs: 400,md:800},
              maxWidth: { xs: 400,md:1600 }
            }}>
                    <Grid item md={12} >
                        <Carousel  autoPlay={false} indicatorIconButtonProps={{
                            style: {
                                padding: '1px',    // 1
                                color: '#EDF0F5',// 3
                            }
                        }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    color: '#277FFE' // 2
                                }
                            }}
                        >
                            <Grid container sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                                <Grid item md={6} >
                                    <Grid direction="column">

                                        <Grid item md={3}>
                                            <Typography sx={{ fontSize: "32px", color: "white", fontWeight: "600", paddingTop: "40px", fontFamily: "poppins" }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>
                                            <Grid sx={{ paddingTop: "10px" }}><Button type="contained" sx={{ backgroundColor: "#ffffff", textTransform: "capitalize", width: "140px", fontFamily: "poppins", maxWidth: "150px" }}>View More</Button></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                        </Carousel>
                    </Grid>
                    {/* <div style={{maxWidth:"1000px" ,maxHeight:"300px",overflow:"auto"}}> */}
                    <Grid item md={12} sx={{paddingLeft:"10px"}}>
                        {/* <Grid container item  direction="row"> */}
                        <Slider {...settings} >
                        {Array.from(Array(title.length)).map((_, index) => (
                                    <Grid>
                                        <Grid item key={index} sx={{marginLeft:"30px"}} >
                                            <Cardd title={title} int={index} optionName={options1} optionsLength={options1.length} images={images} optionsAll={[options, options1, options2, options3, options4, options5]} />
                                        </Grid>
                                    </Grid>
                                ))}
              </Slider> 
                        {/* </Grid> */}
                    </Grid>
                    {/* </div> */}
                </Container>
            </Grid>
        </Container>
    );
}
export default Patient

