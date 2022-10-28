import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Container,
    Grid,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel'
import tolly from '../img/dolly.png';
import Header from "../component/headertest";
import { makeAPIpost } from '../component/api.js';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Cardd } from "../component/card.jsx";

export default function Patient(props) {
    let options = []
    let options1 = ["Order Meal / Status", "My Diet Plan", "Attender Plan"]
    let options2 = ["Calls", "patient schedules", "patient Care Team",]
    let options3 = ["Laboratory", "Radiology", "Documents"]
    let options4 = ["Scheduled Visits", "Scheduled Activities", "Option 3"]
    let options5 = ["Scheduled Visits", "Scheduled Activities", "Option 3"]
    let cardname = []
    let cardlogo = []
    let [LOGO, putlogo] = React.useState("");
    let [TITLE, puttitle] = React.useState("");
    useEffect(() => {
        const getData = async () => {
            let inputdata = props.inputarray
            console.log(inputdata);
            let permsn_repo = await localStorage.getItem("permsn_repo")
            let array = permsn_repo.split(',');
            let raw1 = {
                "db_name": "ipmo",
                "query": "for doc in spe_category filter doc.rep_id IN [" + array.map(x => "'" + x + "'").toString() + "] return doc"
            }
            console.log(raw1)
            const url1 = process.env.REACT_APP_QUERY_URL
            let response1 = await makeAPIpost(raw1, url1)
            console.log(response1)
            let responseData = response1
            for (let i = 0; i < responseData.length; i++) {
                cardname[i] = responseData[i].name
                cardlogo[i] = responseData[i].logo
            }
            console.log(responseData)



            const raw2 = {
                "db_name": "ipmo",
                "query": "for doc in spe_application filter doc.rep_id IN [" + array.map(x => "'" + x + "'").toString() + "] return doc",
            }
            console.log(raw2);
            const url2 = process.env.REACT_APP_QUERY_URL
            let response = await makeAPIpost(raw2, url2)
            console.log(response);


            for (let i = 0; i < response.length; i++) {

                let enter = response[i].apptype
                console.log(enter)


            }
            putlogo(cardlogo)
            puttitle(cardname)
        }
        getData();
    }, [])
    const settings = {
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: false,
        // prevArrow: <SamplePrevArrow style={{height:"100px"}}  />,
        nextArrow: <SampleNextArrow style={{ height: "100px" }} />,
        responsive: [////////////////////res
            {
                breakpoint: 1485,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 1197,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 917,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 585,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "#00000029", height: "20px", display: "flex", justifyContent: "center", padding: "25px 10px ",marginRight:"35px" }}
                onClick={onClick}
            />
        );
    }
    //   function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container maxWidth="device-width" style={{padding: "0px" }}>
            <Header name="Dolly Tan" profile={tolly} displayP="flex" />
            <Grid maxWidth="device-width" direction="column" container marginTop="20px" >
                <Container maxWidth="device-width">
                    <Grid item md={12} maxWidth="device-width" style={{ marginLeft: "13px", marginTop: "10px", marginRight: "13px", height: "400px", displayp: "flex" }}>
                        <Carousel maxWidth="device-width" autoPlay={false} indicatorIconButtonProps={{
                            style: {
                                padding: '1px',    // 1
                                color: '#EDF0F5',
                                // 3                 
                            }
                        }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    color: '#277FFE' // 2
                                }
                            }}
                        >
                            <Grid container maxWidth="device-width" style={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "310px",

                                borderRadius: "20px"
                            }} >
                                <Grid item md={6} sm={12}>

                                    <Grid item md={12} sm={12} direction="row">
                                        <Grid sm={12}>
                                            {isMobile ? (
                                                <Typography style={{
                                                    color: "white", fontWeight: "600", paddingTop: "70px", paddingLeft: "15px", fontFamily: "poppins", fontSize:"25px",paddingRight:"0px"
                                                }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>

                                            ) : (<Typography style={{ color: "white", fontWeight: "600", paddingTop: "70px", paddingLeft: "15px", fontFamily: "poppins", fontSize: 32 }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>)}
                                        </Grid>
                                        <Grid sm={3} style={{ paddingTop: "15px" }} ><Button type="contained" sx={{ backgroundColor: "#ffffff", textTransform: "capitalize", width: "155px", height: "40px", fontFamily: "poppins", color: "#277FFE", marginLeft: "15px", borderRadius: "5px" }}>View More</Button></Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container md={12} style={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "310px",
                                width: "100%",
                                borderRadius: "20px"
                            }} >
                            </Grid>
                            <Grid container md={12} style={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "310px",
                                width: "100%",
                                borderRadius: "20px"
                            }} >
                            </Grid>
                            <Grid container style={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "310px",
                                width: "100%",
                                borderRadius: "20px"
                            }} >
                            </Grid>
                            <Grid container style={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                height: "310px",
                                width: "100%",
                                borderRadius: "20px"
                            }} >
                            </Grid>
                        </Carousel>
                    </Grid>
                    {/* <div style={{maxWidth:"1000px" ,maxHeight:"300px",overflow:"auto"}}> */}
                    <Grid item md={12} style={{ marginTop: "-70px", justifySelf:"center"}}>
                        
                        {/* <Grid container item  direction="row"> */}
                        <Slider {...settings} >
                            {Array.from(Array(TITLE.length)).map((_, index) => (
                                <Grid>
                                    <Grid item key={index} style={{ marginLeft: "20px", paddingBottom: "30px",justifyContent:"center"}} >
                                        <Cardd title={TITLE} int={index} optionName={options1} navigate={"/SPE/enter"} optionsLength={options1.length} images={LOGO} optionsAll={[options, options1, options2, options3, options4, options5]} />
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
