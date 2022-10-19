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
    let [response, putresponse] = React.useState("Loading");

 



   

    
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
        // prevArrow: <SamplePrevArrow sx={{height:"100px"}}  />,
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
return (
        <Container maxWidth="xl" style={{ height: "100%", padding: "0px" }}>
            <Header name="Dolly Tan" profile={tolly} displayP="flex" />
            <Grid direction="column" container marginTop="20px" >
                <Container sx={{
              height:1600,
              width:"1500px",
              maxHeight: { xs: 400,md:600,lg:800,xl:1500},
              maxWidth: { xs: 400,md:1900 }
            }}>
                    <Grid item md={12} sx={{height:"400px",margin:"10px"}}>
                        <Carousel  autoPlay={false} indicatorIconButtonProps={{
                            style: {
                                padding: '1px',    // 1
                                color: '#EDF0F5',
                                fontSize:"5px"//3,
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
                                
                                height: "310px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                                <Grid item md={6} >
                                    <Grid direction="column">
                                        <Grid item md={3}>
                                            <Typography sx={{ fontSize: "29px", color: "white", fontWeight: "700", padding: "80px 0px 0px 50px", fontFamily: "poppins" }}>Making the Gold Standard of Integrated Healthcare Solutions</Typography>
                                            <Grid sx={{padding: "20px 0px 0px 50px",}}><Button type="contained" sx={{ backgroundColor: "#ffffff", textTransform: "capitalize", width: "140px", fontFamily: "poppins",color:"#277FFE",maxWidth: "150px" }}>View More</Button></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                               
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/blur.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                            <Grid container sx={{
                                backgroundImage: `url(image/headerbackground.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                               
                                height: "250px",
                                width: "100%",
                                borderRadius: "10px"
                            }} >
                            </Grid>
                        </Carousel>
                    </Grid>
                    <Grid item md={12} sx={{marginTop:"-70px"}}>
                        <Slider {...settings} >
                        {Array.from(Array(TITLE.length)).map((_, index) => (
                                    <Grid>
                                        <Grid item key={index} sx={{marginLeft:"10px"}} >
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


