import React, { useState } from "react";
import '../css/App.css'
import logo from '../img/logo.png'
import mic from '../img/mic.png'
import text from '../img/text.png'
import alert from '../img/alert.svg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Profile from '../pages/profilePage.js'
import {
    Avatar,
    Grid,
    Backdrop,
    Typography,
    Divider, Box,
} from "@mui/material";

function App() {
    const [count, setCount] = useState(false);


       
        return (
            <div>
                <Grid maxWidth="device-width" container spacing={0}>
                    <Grid item container style={{ height: "60px" }}>
                        <Grid item lg={6} md={6} sm={6} xs={6} alignSelf="center" >
                            <Grid item container direction="row" >
                                <Avatar src={logo} style={{ width: 40, height: 33, marginLeft: "50px" }} />
                                <Typography style={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center", marginLeft: "10px", }}>Smart Patient Engagement</Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <Grid item container direction="row" style={{ display: "flex", justifyContent: "flex-end", }} >
                                <Grid item container md={5} style={{ justifyContent: "flex-end", marginTop: "0px", }} >
                                    <Grid display={this.props.displayP}>

                                        {/* <Divider orientation="vertical" style={{ padding:"0px 10px 0px 10px",height:"92%"}}  /> */}

                                        <Avatar src={alert} style={{ width: 30, height: 30,padding:"5px 0px 10px 10px",marginTop:"10px" }} />

                                        <Typography style={{ fontSize: "15px", fontFamily: "poppins", color: "#FA273E", marginTop: "10px", borderRight: "2px solid #F3F5F7", padding: "16px 10px", margin: "0" }} >Emergency</Typography>
                                        {/* <Divider orientation="vertical" style={{ padding:"0px 10px 0px 0px",alignSelf:"stretch",height:"92%"}}  /> */}
                                        <Avatar src={mic} style={{ width: 30, height: 30, padding: "17px 10px" }} />
                                        {/* <Divider orientation="vertical" style={{height:"auto"}}  /> */}
                                        <Avatar src={text} style={{ width: 30, height: 45, padding: "10px" }} />
                                    </Grid>
                                </Grid>
                                <Grid item container md={5} style={{ justifyContent: "center", marginRight: "30px" }} >
                                    {/* <Divider orientation="vertical" style={{height:"92%"}} /> */}
                                    <Typography style={{ padding: "10px 0px 10px 10px", fontSize: "22px", fontFamily: "poppins", fontWeight: '300', color: "#0D224C", marginTop: "5px", borderLeft: "2px solid #F3F5F7", padding: "16px 10px", margin: "0" }}> <font color="#E62E22">R</font>12</Typography>
                                    {/* <Divider orientation="vertical" style={{ padding: "0px 10px 0px 0px",height:"92%"}} /> */}
                                    <Typography style={{ padding: "10px", fontSize: "22px", fontFamily: "poppins", fontWeight: '300', color: "#0D224C", marginTop: "5px", borderRight: "2px solid #F3F5F7", borderLeft: "2px solid #F3F5F7", padding: "16px 10px", margin: "0" }}><font color="#E62E22" >B</font>12</Typography>
                                    {/* <Divider orientation="vertical" style={{ padding: "0px 0px ",height:"92%"}} /> */}
                                    <NotificationsIcon style={{ padding: "10px 0px 10px 10px", marginTop: "10px", borderRight: "2px solid #F3F5F7", padding: "16px 10px", margin: "0" }}></NotificationsIcon>
                                    {/* <Divider orientation="vertical" style={{ padding: "0px 10px 0px 0px",height:"92%"}} /> */}
                                    <Avatar src={this.props.profile} style={{ width: 40, height: 40, marginLeft: "10px", marginTop: "10px", cursor: "pointer" }} onClick={() => this.setState({ count: this.state.count = true })} />
                                    <Typography style={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: '600', color: "#0D224C", marginTop: "10px", cursor: "pointer" }} onClick={() => this.setState({ count: this.state.count = true })}>{this.props.name}</Typography>
                                    <KeyboardArrowDownRoundedIcon style={{ marginTop: "10px", padding: '10px 0px', cursor: "pointer" }} onClick={() => this.setState({ count: this.state.count = true })}></KeyboardArrowDownRoundedIcon>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Backdrop maxWidth="lg" style={{ color: '#fff', paddingRight: "50px", paddingTop: "120px", zIndex:1}}
                            open={this.state.count}
                            onClick={() => this.setState({ count: this.state.count = false })}
                        >
                            <Profile></Profile>
                        </Backdrop>
                    </Grid >
                </Grid>
                <Grid maxWidth="deviceWidth"  style={{ backgroundColor: "#F3F5F7" }}></Grid>
            </div>
        );
    }

export default App;