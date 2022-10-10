import React, { useState } from "react";
import '../css/App.css'
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Avatar, Typography } from '@mui/material';
import logo from '../img/logo.png'
import doctor from '../img/doctor1.png'
import doc from '../img/doc.png'
import nur from '../img/nur.png'
import pat from '../img/pat.png'
import selec from '../img/selec.svg'




const LanchPage = () => {


    
const navigate = useNavigate();

  const [showSelectDoctor, setSelectDoctor] = useState(false)
  const [showSelectNurse,setSelectNurse] = useState(false)
  const [showSelectPatient,setSelectPatient] = useState(false)


  const showselectDoctor = () =>{
    localStorage.setItem('user', "doctor");
    setSelectDoctor(true)
    setSelectNurse(false)
    setSelectPatient(false)
    setTimeout(function () {
     navigate("/login");
    }, 500);
 

  }
 const showselectNurse = () =>{
    localStorage.setItem('user', "nurse");
    setSelectDoctor(false)
    setSelectNurse(true)
    setSelectPatient(false)
    setTimeout(function () {
        navigate("/login");
       }, 500);
  }
  const showselectPatient = () =>{
    localStorage.setItem('user', "patient");
    setSelectDoctor(false)
    setSelectNurse(false)
    setSelectPatient(true)
    setTimeout(function () {
        navigate("/login");}, 500);
  }

  const admin =()=>{
   navigate("/login");
   //window.location.replace("https://ipmo.dev.ainqaplatform.in/");
   window.open("https://ipmo.dev.ainqaplatform.in/", "/login");
  }



    const header = {
        height: "60px",

    }
    const doco = {
        width: "70vh",
        height: "82vh",
        maxHeight: { xs: 200, md: 650 },
        maxWidth: { xs: 250, md: 600 },
        padding: "0px",
        margin: "0px"
    }
    const Heading = {
        fontWeight: "bold",
        fontSize: "40px",
        color: "#223144",
        margin: "0px"
    }
    const subHeading = {
        fontWeight: "medium",
        fontSize: "18px",
        color: "#CDCED0",
        marginTop: "0px",
        marginBottom: "50px"

    }
    const center = {
        alignSelf: "center"
    }
    const minibox = {
        height: "200px",
        backgroundColor: "#F5F7FA",
        borderRadius: "20px",
        
    }
    const persona = {
        height: "auto",
        color: "white"
    }

 



    return (
        <div>
            <Container maxWidth="xl" sx={{ padding: "30px", backgroundColor: "#F5F7FA" }}>

                <Container maxWidth="xl" sx={{ backgroundColor: "white", borderRadius: "20px" }}>

                    <Grid item container>
                        <Grid item md={12} style={header}>
                            <Avatar src={logo} style={{ width: 60, height: 60, }}  onClick={admin}/>
                        </Grid>

                        <Grid item md={5} lg={6} sx={{ padding: "0px", margin: "0px" }}>
                            <Box style={doco} component="img" src={doctor} />
                        </Grid>

                        <Grid item md={7} lg={6} style={center}>
                            <Grid container direction="column">

                                <p style={Heading}>Select your Profile</p>
                                <p style={subHeading}>Select your appropriate profile to login into SPE</p>
                                <Grid item container spacing={3} direction='row' md={12}>

                                    <Grid item md={4} lg={3}>

                                        <Grid item container sx={{cursor:"pointer"}} direction="column" style={minibox} onClick={showselectDoctor}  {...showSelectDoctor ? {border:"0.5px solid #277FFE", opacity: "50%"} :null}>
                                           
                                            <Grid item md={3} >
                                            { showSelectDoctor ? <SelectComponent/>: null }
                                              
                                            </Grid>
                                            <Grid item md={6} sx={{ alignSelf: "center" }} >
                                                <Avatar src={doc} style={{ width: 80, height: 80,}} {...showSelectDoctor ? {opacity: "0.5"} : {opacity:"1"}}/>
                                            </Grid>
                                            <Grid item md={3} sx={{ borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }} {...showSelectDoctor ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>DOCTOR</div>
                                                </Container>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item md={4} lg={3}>

                                        <Grid item container sx={{cursor:"pointer"}} direction="column" style={minibox} onClick={showselectNurse} {...showSelectNurse ? {border:"0.5px solid #277FFE"} :null} >
                                            <Grid item md={3} >
                                            { showSelectNurse ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item md={6} sx={{ alignSelf: "center" }}>
                                                <Avatar src={nur} style={{ width: 80, height: 80, }} />
                                            </Grid>
                                            <Grid item md={3} sx={{  borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectNurse ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>NURSE</div>
                                                </Container>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item md={4} lg={3}>

                                        <Grid item container sx={{cursor:"pointer"}} direction="column" style={minibox} onClick={showselectPatient} {...showSelectPatient ? {border:"0.5px solid #277FFE"} :null}>
                                            <Grid item md={3}>
                                            { showSelectPatient ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item md={6} sx={{ alignSelf: "center" }}>
                                                <Avatar src={pat} style={{ width: 80, height: 80, }} />
                                            </Grid>
                                            <Grid item md={3} sx={{  borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectPatient ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>PATIENT</div>
                                                </Container>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>



                </Container>
            </Container>

        </div>
    )
}

const SelectComponent = () => (
    <Grid item container direction="row">
        <Avatar src={selec} style={{ width: 20, height: 20, margin: "15px 0 0 15px" }} />
        <Typography sx={{ fontSize: "13px", fontFamily: "poppins",fontWeight:'500', margin: "15px 0 0 10px", color: "#277FFE" }}>Selected</Typography>
    </Grid>
)

export default LanchPage
