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
<<<<<<< Updated upstream
=======
import '../css/App.css'
import { styled } from '@mui/material/styles';
>>>>>>> Stashed changes
import Carousel from 'react-material-ui-carousel'
import tolly from '../img/dolly.png';
import Header from "../component/header";
import { makeAPIpost } from '../component/api.js';
<<<<<<< Updated upstream
import { Cardd } from "../component/card.jsx";
import $ from 'jquery';
export default  function Patient(props) {





=======
import DrawerComponent from "../component/drawer.js";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Cardd } from "../component/card.jsx";
import {Carddd} from "../component/cardtest.jsx";
import Profile from '../pages/profilePage.js'
export default function Patient(props) {
>>>>>>> Stashed changes

    let options = []

    let options1 = ["Order Meal / Status", "My Diet Plan", "Attender Plan"]
    let options2 = ["Calls","patient schedules","patient Care Team",]
    let options3 = ["Laboratory", "Radiology", "Documents"]
    let options4 = ["Scheduled Visits", "Scheduled Activities", "Option 3"]
    let options5 = ["Scheduled Visits", "Scheduled Activities", "Option 3"]
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
        arrow: true,
        slidesToShow: 5,
<<<<<<< Updated upstream
        slidesToScroll:3,
          infinite:false,
         prevArrow: <SamplePrevArrow sx={{height:"100px"}} />,
       
        nextArrow: <SampleNextArrow sx={{height:"100px"}} />,
        
      };
      
=======
        slidesToScroll: 3,
        infinite: false,
        centerPadding: "10px",
        draggable: true,

        // prevArrow: $('.top-arrow'),
        // nextArrow: $('.bottom-arrow'),
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
>>>>>>> Stashed changes
    function SampleNextArrow(props) {
        const { className, style, onClick, images} = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#00000029",height:"20px",display:"flex",justifyContent:"center",padding:"25px 10px"}}
            onClick={onClick}
           
          />
        );
      }
      function SamplePrevArrow (props) {
        const { className, style, onClick } = props;
        return (
<<<<<<< Updated upstream
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
                    <Grid item md={12} >
                        {/* <Grid container item  direction="row"> */}
                        <Slider {...settings} >

                        {Array.from(Array(TITLE.length)).map((_, index) => (
                                    <Grid>
                                        <Grid item key={index} sx={{marginLeft:"30px"}} >
                                            <Cardd title={TITLE} int={index} optionName={options1} navigate={"/enter"} optionsLength={options1.length} images={LOGO} optionsAll={[options, options1, options2, options3, options4, options5]} />
                                        </Grid>
                                    </Grid>
                                ))}
              </Slider> 
                        {/* </Grid> */}
                    </Grid>
                    {/* </div> */}
                </Container>
            </Grid>
=======

            <div
                className={className}
                style={{ ...style, background: "#00000029", height: "20px", display: "flex", justifyContent: "center", padding: "25px 10px ", marginRight: "35px" }}
                onClick={onClick}
            />
        );
    }
    const settingsxs = {
        dots: false,
        arrow: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: false,
        vertical: true,
        verticalScrolling: true,
        centerPadding: "10px",
        draggable: true,
        swipe: true,
        touchMove: true,
        adaptiveHeight: true,
        verticalSwiping: true,
       
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
    const isMobilee = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Container maxWidth="device-width" style={{ padding: "0px" }}>
            {isMobile ? (
          <DrawerComponent profile={tolly}/>         
        ) : (
            <Header name="Dolly Tan" profile={tolly} displayP="flex" />)}
            <Grid maxWidth="device-width" direction="column" container marginTop="10px" >

                <Grid item md={12} maxWidth="device-width" style={{ marginTop: "10px", marginRight: "0px", height: "400px", displayp: "flex" }}>
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
                        <Grid container maxWidth="device-width" sx={{
                            backgroundImage: `url(image/headerbackground.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            margin:{xl:"10px 10px 10px 40px",lg:"10px 10px 10px 40px",md:"10px 10px 10px 40px",sm:"10px 10px 10px 20px",xs:"10px 10px 10px 20px"},
                            height: "310px",
                            width: "100%",maxWidth :{xs:"100%",md:"92%",lg:"95%",sm:"100%"},marginRight:{xs:"10px",md:"20px"},
                            borderRadius: "20px"
                        
                        }} >
                            <Grid item md={6} sm={12}>

                                <Grid item md={12} sm={12} direction="row">
                                    <Grid sm={12}>
                                        {isMobile ? (
                                            <Typography style={{
                                                color: "white", fontWeight: "600", paddingTop: "70px", paddingLeft: "50px", fontFamily: "poppins", fontSize: "25px", paddingRight: "0px"
                                            }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>

                                        ) : (<Typography style={{ color: "white", fontWeight: "600", paddingTop: "70px", fontFamily: "poppins", fontSize: 32, paddingLeft: "50px" }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>)}
                                    </Grid>
                                    <Grid sm={3} style={{ paddingTop: "15px" }} ><Button type="contained" sx={{ backgroundColor: "#ffffff", textTransform: "capitalize", width: "155px", height: "40px", fontFamily: "poppins", color: "#277FFE", marginLeft: "50px", borderRadius: "5px" }}>View More</Button></Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid container md={12} style={{
                            backgroundImage: `url(image/blur.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            paddingLeft: "30px",
                            margin: "10px 10px 10px 40px",
                            height: "310px",
                            width: "95%",
                            borderRadius: "20px"
                        }}
                        sx={{ height: "310px",
                        width: "95%",maxWidth :{xs:"86%",md:"92%",lg:"95%",sm:"90%"}}}>  
                        </Grid>
                        <Grid container md={12} style={{
                            backgroundImage: `url(image/headerbackground.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            paddingLeft: "30px",
                            margin: "10px 10px 10px 40px",
                            height: "310px",
                            width: "95%",
                            borderRadius: "20px"
                        }} 
                        sx={{ height: "310px",
                        width: "95%",maxWidth :{xs:"86%",md:"92%",lg:"95%",sm:"90%"}}}>
                        </Grid>
                        <Grid container style={{
                            backgroundImage: `url(image/blur.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            paddingLeft: "30px",
                            margin: "10px 10px 10px 40px",
                            height: "310px",
                            width: "95%",
                            borderRadius: "20px"
                        }}  sx={{ height: "310px",
                        width: "95%",maxWidth :{xs:"86%",md:"92%",lg:"95%",sm:"90%"}}}>
                        </Grid>
                        <Grid container style={{
                            backgroundImage: `url(image/headerbackground.png)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            paddingLeft: "30px",
                            margin: "10px 10px 10px 40px",
                            height: "310px",
                            width: "95%",
                            borderRadius: "20px"
                        }} sx={{ height: "310px",
                        width: "95%",maxWidth :{xs:"86%",md:"92%",lg:"95%",sm:"90%"}}} >
                        </Grid>
                    </Carousel>
                </Grid></Grid>
            {/* <div style={{maxWidth:"1000px" ,maxHeight:"300px",overflow:"auto"}}> */}
{/* <container style={{display:"flex",alignItem:"center"}}> */}
            <Grid item md={12} direction="row"  >
                {/* <Grid container item  direction="row"> */}
                {isMobilee? (
                    <Slider {...settingsxs} >
                        {Array.from(Array(TITLE.length)).map((_, index) => (
                            <Grid container direction="row" >
                                <Grid item key={index} sx={{ marginLeft: "60px", paddingBottom: "30px" }} >
                                    <Cardd title={TITLE} int={index} optionName={options1} navigate={"/SPE/enter"} optionsLength={options1.length} images={LOGO} optionsAll={[options, options1, options2, options3, options4, options5]} />
                                </Grid>
                            </Grid>
                        ))}
                    </Slider>
                ) : (
                    <Slider {...settings}  >
                        {Array.from(Array(TITLE.length)).map((_, index) => (
                            <Grid container direction="row"  >
                                <Grid item key={index} style={{ marginLeft: "30px", paddingBottom: "30px"}} >
                                    <Cardd title={TITLE} int={index} optionName={options1} navigate={"/SPE/enter"} optionsLength={options1.length} images={LOGO} optionsAll={[options, options1, options2, options3, options4, options5]} />
                                </Grid>
                            </Grid>
                        ))}
                    </Slider>
                )}
            </Grid>
            {/* </div> */}
            {/* </container> */}
>>>>>>> Stashed changes
        </Container>
    );
}


