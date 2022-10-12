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
import { Cardd } from "../component/card.jsx";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default  function Patient(props) {






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
        slidesToShow: 5,
        slidesToScroll:1,
          infinite:false,
         prevArrow: <SamplePrevArrow sx={{height:"100px"}} />,
       
        nextArrow: <SampleNextArrow sx={{height:"100px"}} />,
        
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
      function SamplePrevArrow (props) {
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
        </Container>
    );
}


