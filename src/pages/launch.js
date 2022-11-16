import React, { useState } from "react";
import '../css/App.css'
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Avatar, Typography, Paper } from '@mui/material';
import logo from '../img/logo.png'
import doctor from '../img/doctor1.png'
import doc from '../img/doc.png'
import nur from '../img/nur.png'
import pat from '../img/pat.png'
import selec from '../img/selec.svg'
import SmallC from "./Sam";
const LanchPage = () => {
    const navigate = useNavigate();
    const [showSelectDoctor, setSelectDoctor] = useState(false)
    const [showSelectNurse, setSelectNurse] = useState(false)
    const [showSelectPatient, setSelectPatient] = useState(false)
    const showselectDoctor = () => {
        localStorage.setItem('user', "doctor");
        setSelectDoctor(true)
        setSelectNurse(false)
        setSelectPatient(false)
        setTimeout(function () {
            navigate("/login");
        }, 500);
    }
    const showselectNurse = () => {
        localStorage.setItem('user', "nurse");
        setSelectDoctor(false)
        setSelectNurse(true)
        setSelectPatient(false)
        setTimeout(function () {
            navigate("/login");
        }, 500);
    }
    const showselectPatient = () => {
        localStorage.setItem('user', "patient");
        setSelectDoctor(false)
        setSelectNurse(false)
        setSelectPatient(true)
        setTimeout(function () {
            navigate("/login");
        }, 500);
    }
    const persona = {
        height: "20px",
        color: "white", fontFamily: "poppins", fontSize: "20px"
    }
    return (
        <div >
            <Grid style={{ height: "100vh" }} container sx={{ padding: { xs: "20px", sm: "20px", md: "20px", lg: "40px 50px", xl: "60px 40px 50px 70px" }, height: "90%", backgroundColor: "#F5F7FA", maxWidth: "none", display: "flex" }}>
                {/* <Grid sx={{ backgroundColor: "white", borderRadius: "30px", margin: "none", }}> */}
                <Grid container item sx={{ backgroundColor: "white", borderRadius: "30px", margin: "none", display: "flex", flex: "1 1 auto", justifyContent: "center", padding: "2em" }} spacing={2}
                >
                    {/* <Grid container sx={{alignSelf:{sm:"center",md:"center"}}}> */}
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ position: "relative" }}>
                        <div className="login_img">
                            <Avatar src={logo} sx={{ width: "60px", height: "55px", maxWidth: { xl: "60px", lg: "60px", md: "60px", xs: "45px", sm: "45px" }, maxHeight: { xl: "55px", md: "55px", lg: "55px", xs: "40px", sm: "40px" }, position: "absolute", left: "16px", top: "16px", padding: "0px" }} />
                            <img src={doctor} style={{ width: "86%", height: "auto", objectFit: "contain" }} />
                        </div>
                        {/* <Box sx={{ height: "auto", maxWidth: { xs: "94%", sm: "89%", md: "80%", lg: "70%", xl: "%" }, padding: { md: "40px 0px 40px 40px", lg: "40px 0px 40px 40px", xl: "40px 0px 40px 40px", xs: "10px 0px 10px 10px", sm: "20px 0px 20px 20px" } }} component="img" src={doctor} /> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} style={{ marginTop: "6em" }}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ textAlign: { xs: "center", sm: "center", xl: "Left" } }} >
                            <div>
                                <Typography sx={{ color: "#223144", fontWeight: "800", fontFamily: "poppins", fontSize: { xs: "27px", sm: "28px", md: "29px", lg: "32px", xl: "36px" } }}>Select your Profile</Typography>
                                <Typography sx={{ color: "#CDCED0", fontSize: "16px", marginTop: { md: "10px", xs: "5px" }, fontFamily: "poppins" }}>Select your appropriate profile to login into SPE</Typography>
                            </div>
                        </Grid>
                        <Grid container style={{ marginTop: "6em" }} >
                            <Grid container item md={4} lg={4} xl={4} sx={{ display: { xs: "none", sm: "none", xl: "block", md: "block", lg: "block" } }}>
                                <Grid item container sx={{ height: "288px", width: "212px", backgroundColor: "#F5F7FA", borderRadius: "20px", cursor: "pointer", }} direction="column" onClick={showselectDoctor}  {...showSelectDoctor ? { border: "0.5px solid #277FFE", opacity: "50%" } : null}>
                                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
                                        {showSelectDoctor ? <SelectComponent /> : null}
                                    </Grid>
                                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{ alignSelf: "center" }} >
                                        <Avatar src={doc} style={{ marginTop: "10px", width: 90, height: 90, }} {...showSelectDoctor ? { opacity: "0.5" } : { opacity: "1" }} />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }} {...showSelectDoctor ? { backgroundColor: "#ACBCD2" } : { backgroundColor: "#4F709F" }}>
                                        <Container maxWidth="lg">
                                            <div style={persona}>DOCTOR</div>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={12} sx={{ display: { md: "none", xl: "none", xs: "block", sm: "block" }, paddingLeft: { xs: "0px", sm: "160px" } }}>
                                <SmallC persona="Doctor" imag={doc} />
                            </Grid>
                            <Grid container item md={4} lg={4} xl={4} sx={{ display: { xs: "none", sm: "none", xl: "block", md: "block", lg: "block" } }} >
                                <Grid item container sx={{ height: "288px", width: "212px", backgroundColor: "#F5F7FA", borderRadius: "20px", cursor: "pointer" }} direction="column" onClick={showselectNurse} {...showSelectNurse ? { border: "0.5px solid #277FFE" } : null} >
                                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >                                            {showSelectNurse ? <SelectComponent /> : null}
                                    </Grid>
                                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{ alignSelf: "center" }}>
                                        <Avatar src={nur} style={{ marginTop: "10px", width: 90, height: 90, }} />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectNurse ? { backgroundColor: "#ACBCD2" } : { backgroundColor: "#4F709F" }}>
                                        <Container maxWidth="lg">
                                            <div style={persona}>NURSE</div>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={12} sx={{ display: { md: "none", xl: "none", xs: "block", sm: "block" }, paddingLeft: { xs: "0px", sm: "160px" } }}>
                                <SmallC persona="Nurse" imag={nur} />
                            </Grid>
                            <Grid container item md={4} lg={4} xl={4} sx={{ display: { xs: "none", sm: "none", xl: "block", md: "block", lg: "block" } }} >
                                <Grid item container sx={{ height: "288px", width: "212px", backgroundColor: "#F5F7FA", borderRadius: "20px", cursor: "pointer" }} direction="column" onClick={showselectPatient} {...showSelectPatient ? { border: "0.5px solid #277FFE" } : null}>
                                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                        {showSelectPatient ? <SelectComponent /> : null}
                                    </Grid>
                                    <Grid item xs={7} sm={7} md={7} lg={7} xl={7} sx={{ alignSelf: "center" }}>
                                        <Avatar src={pat} style={{ marginTop: "10px", width: 90, height: 90, }} />
                                    </Grid>
                                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3} sx={{ borderRadius: "0 0 20px 20px", textAlign: "center", paddingTop: "12px" }}{...showSelectPatient ? { backgroundColor: "#ACBCD2" } : { backgroundColor: "#4F709F" }}>
                                        <Container maxWidth="lg">
                                            <div style={persona}>PATIENT</div>
                                        </Container>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid xs={12} sm={12} sx={{ display: { md: "none", xl: "none", xs: "block", sm: "block" }, paddingLeft: { xs: "0px", sm: "160px" } }}>
                                <SmallC persona="Patient" imag={pat} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* </Grid> */}
            </Grid>
        </div>
    )
}
const SelectComponent = () => (
    <Grid item container direction="row">
        <Avatar src={selec} style={{ width: 20, height: 20, margin: "15px 0 0 15px" }} />
        <Typography sx={{ fontSize: "13px", fontFamily: "poppins", fontWeight: '500', margin: "15px 0 0 10px", color: "#277FFE" }}>Selected</Typography>
    </Grid>
)
export default LanchPage