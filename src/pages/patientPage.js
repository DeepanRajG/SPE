import React from "react";
import {useEffect} from "react";
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
export default  function Patient(props) {
    let cardname=[]
    let cardlogo=[]
    let [LOGO, putlogo] = React.useState("");
    let [TITLE, puttitle] = React.useState("");
    let [OPTION, putoption] = React.useState("");
  let [STATUS, putstatus] = React.useState("");
    useEffect(() => {
        const getData = async () => {
            let inputdata=props.inputarray
            console.log(inputdata);
            let permsn_repo= await localStorage.getItem("permsn_repo")
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
        const raw2 = {
          "db_name": "ipmo",
          "query": "for doc in spe_application filter doc.rep_id IN ["+array.map(x => "'" + x + "'").toString()+"] return doc",
      }
      console.log(raw2);
      const url2 = process.env.REACT_APP_QUERY_URL
        let response = await makeAPIpost(raw2, url2)
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          let enter=response[i].apptype
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
        slidesToScroll:5,
    infinite:false,
        // prevArrow: <SamplePrevArrow sx={{height:"100px"}}  />,
        nextArrow: <SampleNextArrow sx={{height:"100px"}} />,
        responsive: [////////////////////res
        {
            breakpoint: 1485,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 5,
                
            }
        },
        {
            breakpoint: 1197,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                
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
            style={{ ...style, background: "#00000029",display:"flex",justifyContent:"center",marginRight:"30px",borderRadius:"5px",padding:"25px 8px"}}
            onClick={onClick}
          />
        );
      }
      // function SamplePrevArrow(props) {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{ ...style, background: "#00000029",height:"20px",justifyContent:"center",padding:"25px 10px",marginLeft:"20px"}}
      //       onClick={onClick}
      //     />
      //   );
      // }
return (
        <Container maxWidth="device-width" style={{  padding: "0px" }}>
            <Header name="Dolly Tan" profile={tolly} displayP="flex" />
            <Grid direction="column" container maxWidth="device-width" sx={{marginTop:"20px"}}>
                {/* <Grid item md={12} sx={{
              height: 340,
              width:"100vw",display:"flex",justifyContent:"center"
            }}> */}
                    <Grid item md={12} maxWidth="device-width" sx={{height:"400px"}}>
                        <Carousel  autoPlay={false} indicatorIconButtonProps={{
                            style: {
                                padding: '1px',    // 1
                                color: '#EDF0F5',
                                marginTop:"15px"// 3
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
                                margin:{xl:"10px 10px 10px 50px",lg:"10px 10px 10px 50px",md:"10px 10px 10px 40px",sm:"10px 10px 10px 10px",xs:"10px 10px 10px 10px"},
                                height: "310px",
                                width: "98%",maxWidth:{xs:"95%",sm:"100%",md:"92%",lg:"95%",xl:"96%"},

                                borderRadius: "20px"
                            }} >
                                <Grid item md={6} >
                                    <Grid direction="column">
                                        <Grid item md={3}>
                                        <Typography sx={{ fontSize:{xl:"29px",lg:"25px",md:"23px",sm:"20px",xs:"20px"}, color: "white", fontWeight: "700", padding: "80px 0px 0px 50px", fontFamily: "poppins" }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>
                                            <Grid sx={{padding: "20px 0px 0px 50px",}}><Button type="contained" sx={{ backgroundColor: "#ffffff", textTransform: "capitalize", width: "155px", height: "40px", fontFamily: "poppins", color: "#277FFE", marginLeft: "5px", borderRadius: "5px" }}>View More</Button></Grid>
                                    </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                margin: "10px 10px 10px 50px",
                                height: "310px",
                                width: "98%",maxWidth:{xs:"95%",sm:"100%",md:"92%",lg:"95%",xl:"96%"},
                                borderRadius: "20px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                margin: "10px 10px 10px 50px",
                                height: "310px",
                                width: "98%",maxWidth:{xs:"95%",sm:"100%",md:"92%",lg:"95%",xl:"96%"},
                                borderRadius: "20px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                margin: "10px 10px 10px 50px",
                                height: "310px",
                                width: "98%",maxWidth:{xs:"95%",sm:"100%",md:"92%",lg:"95%",xl:"96%"},
                                borderRadius: "20px"
                            }} >
                            </Grid>
                            <Grid  sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                paddingLeft: "30px",
                                margin: "10px 10px 10px 50px",
                                height: "310px",
                                width: "98%",maxWidth:{xs:"95%",sm:"100%",md:"92%",lg:"95%",xl:"96%"},
                                borderRadius: "20px"
                            }} >
                            </Grid>
                        </Carousel>
                    </Grid>
                    
                                        {/* <Grid item md={12} direction="column" >
                        <Slider {...settings} >
                        {Array.from(Array(TITLE.length)).map((_, index) => (
                                    <Grid>
                                        <Grid item key={index} sx={{marginLeft:"50px",paddingBottom:"30px"}} >
                                            <Cardd title={TITLE} int={index} optionName={options1} navigate={"/SPE/enter"} optionsLength={options1.length} images={LOGO} optionsAll={[options, options1, options2, options3, options4, options5]} />
                                        </Grid>
                                    </Grid>
                                ))}
              </Slider> 
                       
                    </Grid> */}
                    <Grid container  item md={12} lg={12} xl={12} xs={12} sm={12}  sx={{ paddingLeft: "10px", marginBottom: "100px", display: { sm: "none", xs: "none", xl: "block", lg: "block", md: "block" } }} >
          <Slider {...settings}  >
            {Array.from(Array(TITLE.length)).map((_, index) => (
              <Grid item xs={12} sm={12} md={12} lg={12} key={index} sx={{ marginLeft: "10px", alignSelf: "center" }} >
                <Cardd sx={{ padding: "10px 25px 15px 11px" }} title={TITLE} url={URL} int={index} images={LOGO} status={STATUS} optionsAll={OPTION} />
              </Grid>
            ))}
          </Slider>
        </Grid>
        <Grid item md={12} lg={12} xl={12} xs={12} sm={12} sx={{ padding: "10px", alignSelf: "center", marginBottom: "100px", display: { sm: "block", xs: "block", xl: "none", lg: "none", md: "none" } }}>
          {Array.from(Array(TITLE.length)).map((_, index) => (
            <Grid item xs={12} sm={12} md={12} lg={12} key={index} sx={{ marginLeft: "0px", alignSelf: "center",padding:"10px"}} >
              <Cardd sx={{ padding: "10px 25px 15px 11px" }} title={TITLE} url={URL} int={index} images={LOGO} status={STATUS} optionsAll={OPTION} />
            </Grid>
          ))}
        </Grid>
            </Grid>
        </Container>
    );
}
