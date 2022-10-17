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
     navigate("/SPE/login");
    }, 500);
   }
 const showselectNurse = () =>{
    localStorage.setItem('user', "nurse");
    setSelectDoctor(false)
    setSelectNurse(true)
    setSelectPatient(false)
    setTimeout(function () {
        navigate("/SPE/login");
       }, 500);
  }
  const showselectPatient = () =>{
    localStorage.setItem('user', "patient");
    setSelectDoctor(false)
    setSelectNurse(false)
    setSelectPatient(true)
    setTimeout(function () {
        navigate("/SPE/login");}, 500);
  }
  const admin =()=>{
   navigate("/SBE/login");
   //window.location.replace("https://ipmo.dev.ainqaplatform.in/");
   window.open("https://ipmo.dev.ainqaplatform.in/", "/SBE/login");
  }

    const persona = {
        height: "20px",
        color: "white",fontFamily:"poppins",fontSize:"20px"
    }
    return (
<div style={{height:"inherit"}}>
            <Grid  sx={{ padding: "45px", backgroundColor: "#F5F7FA",maxWidth:"none", }}>
                <Grid   sx={{ backgroundColor: "white", borderRadius: "30px", margin:"none",  }}>
                    <Grid item container sx={{height:"inherit"}}>
                    <Grid item md={7} lg={6} xl={6} sx={{position:"relative"}}>
                    <Avatar src={logo} style={{ width: "60px", height:"55px",position:"absolute",left:"20px",top:"10px",padding:"0px" }} />
                        <Box sx={{width:"410px",height: "630px",minHeight: { xs: 680, md: 630,lg:700 },minWidth: { xs: 531, md: 410,lg:570},padding: "40px 0px 40px 40px"}} component="img" src={doctor} />
                    </Grid>
                        <Grid item md={5} lg={6} xl={6} sx={{marginTop:"130px"}}>
                            <Grid container direction="column" sx={{display:"flex",justifyContent:"flex-start"}}>
                                <Typography sx={{color:"#223144",fontSize:"32px",fontWeight:"700",fontFamily:"poppins"}}>Select your Profile</Typography>
                                <Typography sx={{color:"#CDCED0",fontSize:"15px",fontFamily:"poppins",marginTop:{md:"10px",xs:"5px"}}}>Select your appropriate profile to login into SPE</Typography>
                                <Grid item container rowSpacing={3} sx={{marginTop:{md:"50px",xs:"25px"}}} direction='row' md={12}>
                                    <Grid item md={4} lg={3} sx={{margin:"0px  40px 0px 0px"}}>
                                        <Grid item container sx={{height: "230px",width:"170px",backgroundColor: "#F5F7FA",borderRadius: "20px",cursor:"pointer"}} direction="column"  onClick={showselectDoctor}  {...showSelectDoctor ? {border:"0.5px solid #277FFE", opacity: "50%"} :null}>
                                            <Grid item md={2} >
                                            { showSelectDoctor ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item md={7} sx={{ alignSelf: "center" }} >
                                                <Avatar src={doc} style={{marginTop:"10px", width: 90, height: 90,}} {...showSelectDoctor ? {opacity: "0.5"} : {opacity:"1"}}/>
                                            </Grid>
                                            <Grid item md={3} sx={{ borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }} {...showSelectDoctor ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>DOCTOR</div>
                                                </Container>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={4} lg={3} sx={{marginRight:"40px"}}>
                                        <Grid item container sx={{height: "230px",width:"170px",backgroundColor: "#F5F7FA",borderRadius: "20px",cursor:"pointer"}} direction="column"  onClick={showselectNurse} {...showSelectNurse ? {border:"0.5px solid #277FFE"} :null} >
                                            <Grid item md={2} >
                                            { showSelectNurse ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item md={7} sx={{ alignSelf: "center" }}>
                                                <Avatar src={nur} style={{ marginTop:"10px",width: 90, height: 90, }} />
                                            </Grid>
                                            <Grid item md={3} sx={{  borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectNurse ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>NURSE</div>
                                                </Container>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item md={4} lg={3} >
                                        <Grid item container sx={{height: "230px",width:"170px",backgroundColor: "#F5F7FA",borderRadius: "20px",cursor:"pointer"}} direction="column" onClick={showselectPatient} {...showSelectPatient ? {border:"0.5px solid #277FFE"} :null}>
                                            <Grid item md={2}>
                                            { showSelectPatient ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item md={7} sx={{ alignSelf: "center" }}>
                                                <Avatar src={pat} style={{marginTop:"10px",width: 90, height: 90, }} />
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
                </Grid>
            </Grid>
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
