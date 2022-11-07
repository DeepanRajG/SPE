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
<div >
            <Grid  sx={{padding:{xs:"20px",sm:"20px",md:"20px",lg:"40px",xl:"40px "},backgroundColor: "#F5F7FA",maxWidth:"device-width", }}>
                <Grid   sx={{backgroundColor: "white", borderRadius: "30px", margin:"none",  }}>
                    <Grid item container >
                    <Grid item xs={12}sm={5} md={6} lg={7} xl={6} sx={{position:"relative"}}>
                    <Avatar src={logo} sx={{width:"60px",height:"55px",maxWidth:{xl:"60px",lg:"60px",md:"60px",xs:"45px",sm:"45px"}, maxHeight:{xl:"55px",md:"55px",lg:"55px",xs:"40px",sm:"40px"},position:"absolute",left:"20px",top:"20px"}} />
                    <Box sx={{width:"70%",height: "auto",minWidth: {xs:"90%",sm:"89%",md:"80%",lg:"70%",xl:"70%"},padding:{md:"40px 0px 40px 40px",lg:"40px 0px 40px 40px",xl:"40px 0px 40px 40px",xs:"10px 0px 10px 10px",sm:"20px 0px 20px 20px"}}} component="img" src={doctor} />
                    </Grid>
                        {/* </Grid><Grid item md={7} sm={12} lg={6} xl={6}  alignItems="center" sx={{marginTop:{md:"130px",sm:"100",xs:"50px"}}} > */}
                    <Grid item  xs={12}sm={7} md={6} lg={5} xl={6} sx={{ height: "auto", width:"100%",alignSelf:"center",marginLeft:{xs:"0px",sm:"0px",xl:0,lg:0,md:0},textAlign:{xs:"center",sm:"center",lg:"left",xl:"left",md:"left"}}}>

                            <Grid container direction="column" sx={{display:"flex",justifyContent:"flex-start"}} justifyContent="space-around" >
                                <Typography sx={{color:"#223144",fontWeight:"700",fontFamily:"poppins",fontSize:{xs:"22px",sm:"18px",md:"28px",lg:"32px",xl:"32px"}}}>Select your Profile</Typography>
                                <Typography sx={{color:"#CDCED0",fontSize:"15px",marginTop:{md:"10px",xs:"5px"},fontFamily:"poppins"}}>Select your appropriate profile to login into SPE</Typography>
                                <Grid item container rowSpacing={3} sx={{marginTop:{xl:"50px",lg:"50px",md:"50px",xs:"15px",sm:"20px"}}} direction='row' xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{marginRight:{xs:0,sm:"30px",md:"40px",lg:"40px",xl:"40px"},display:"flex",justifyContent:{xs:"center",sm:"center",md:"center",lg:"center",xl:"flex-start"}}}>
                                        <Grid item container sx={{height: "230px",width:"170px",backgroundColor: "#F5F7FA",borderRadius: "20px",cursor:"pointer",}} direction="column"  onClick={showselectDoctor}  {...showSelectDoctor ? {border:"0.5px solid #277FFE", opacity: "50%"} :null}>
                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
                                            { showSelectDoctor ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{ alignSelf: "center" }} >
                                                <Avatar src={doc} style={{marginTop:"10px", width: 90, height: 90,}} {...showSelectDoctor ? {opacity: "0.5"} : {opacity:"1"}}/>
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }} {...showSelectDoctor ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>DOCTOR</div>
                                                </Container>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{marginRight:{xs:0,sm:"30px",md:"40px",lg:"40px",xl:"40px"},display:"flex",justifyContent:{xs:"center",sm:"center",md:"center",lg:"center",xl:"flex-start"}}}>
                                        <Grid item container sx={{height: "230px",width:"170px",backgroundColor: "#F5F7FA",borderRadius: "20px",cursor:"pointer"}} direction="column"  onClick={showselectNurse} {...showSelectNurse ? {border:"0.5px solid #277FFE"} :null} >
                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
                                            { showSelectNurse ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{ alignSelf: "center"}}>
                                                <Avatar src={nur} style={{ marginTop:10,width: 90, height: 90,}} />
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{  borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectNurse ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
                                                <Container maxWidth="lg">
                                                    <div style={persona}>NURSE</div>
                                                </Container>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={3} md={3} lg={3} xl={3} sx={{display:"flex",justifyContent:{xs:"center",sm:"center",md:"center",lg:"center",xl:"flex-start"}}} >
                                        <Grid item container sx={{height: "230px",width:"170px",backgroundColor: "#F5F7FA",borderRadius: "20px",cursor:"pointer"}} direction="column" onClick={showselectPatient} {...showSelectPatient ? {border:"0.5px solid #277FFE"} :null}>
                                            <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            { showSelectPatient ? <SelectComponent/>: null }
                                            </Grid>
                                            <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{ alignSelf: "center" }}>
                                                <Avatar src={pat} style={{marginTop:"10px",width: 90, height: 90, }} />
                                            </Grid>
                                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{  borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectPatient ? {backgroundColor:"#ACBCD2"} : {backgroundColor: "#4F709F"}}>
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