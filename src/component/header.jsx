
import React, { Component } from "react";
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
    Divider
} from "@mui/material";
class Header extends Component {
    state = {
    }
    constructor(props) {
        super(props);
        this.state = {
            count: false
        };
    }
    render() {
        return (
            <Grid container spacing={0}>
            <Grid item  container sx={{ height: "60px", padding: "0px", margin: "0px"  }} boxShadow="3"  >
            <Grid item lg={6} alignSelf="center" >
                <Grid item container direction="row" >
                    <Avatar src={logo} style={{ width: 33, height: 33, marginLeft: "30px" }} />
                    <Typography sx={{ fontSize: "20px", fontFamily: "poppins", fontWeight: '600', color: "#0D224C", textAlign: "center", marginLeft: "10px" }}>Smart Patient Engagement</Typography>
                </Grid>
            </Grid>
            <Grid item lg={6}  >
                    <Grid item container direction="row" sx={{display: "flex",justifyContent: "flex-end",marginTop:"0px"}} >
                    <Grid  item container md={5} sx={{justifyContent: "flex-end",marginTop:"0px", }} display={this.props.displayP}>
                    <Divider orientation="vertical" sx={{ padding:"0px 10px 0px 10px", marginLeft: "0px", }}  />
                    <Avatar src={alert} style={{ width: 30, height: 30,padding:"5px 0px 10px 10px",marginTop:"10px" }} />
                    <Typography sx={{ padding: "10px 0px 10px 10px", fontSize: "15px", fontFamily: "poppins", fontWeight: 'bold', color: "#0D224C",marginTop:"10px" }} >Emergency</Typography>
                    <Divider orientation="vertical" sx={{ padding:"0px 10px 0px 0px", marginLeft: "0px", }}  />
                    <Avatar src={mic} style={{ width: 30, height: 30,padding:"5px 0px 10px 10px",marginTop:"10px" }} />
                    <Divider orientation="vertical" sx={{ padding:"0px 10px 0px 0px", marginLeft: "0px", }}  />
                    <Avatar src={text} style={{ width: 30, height: 35,padding:"5px 0px 10px 10px",marginTop:"10px" }} />
                    </Grid>
                    <Grid item container md={6} >
                    <Divider orientation="vertical" sx={{ padding: "0px 10px 0px 0px", marginLeft: "0px", }} />
                    <Typography sx={{ padding: "10px", fontSize: "17px", fontFamily: "poppins", fontWeight: '500', color: "#0D224C",marginTop:"10px" }}> <font color="#E62E22">R</font>12</Typography>
                    <Divider orientation="vertical" sx={{ padding: "0px 10px 0px 0px", marginLeft: "0px", }} />
                    <Typography sx={{ padding: "10px", fontSize: "17px", fontFamily: "poppins", fontWeight: '500', color: "#0D224C",marginTop:"10px", }}><font color="#E62E22" >B</font>12</Typography>
                    <Divider orientation="vertical" sx={{ padding: "0px 0px ", marginLeft: "0px", }} />
                    <NotificationsIcon sx={{ padding: "10px",marginTop:"10px" }}></NotificationsIcon>
                    <Divider orientation="vertical" sx={{ padding: "0px 10px 0px 0px", marginLeft: "0px", }} />
                    <Avatar src={this.props.profile} style={{ width: 40, height: 40,marginLeft:"10px" ,marginTop:"10px",cursor:"pointer"}} onClick={() => this.setState({  count: this.state.count =true })}/>
                    <Typography sx={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: 'bold', color: "#0D224C" ,marginTop:"10px",cursor:"pointer"}} onClick={() => this.setState({  count: this.state.count =true })}>{this.props.name}</Typography>
                    <KeyboardArrowDownRoundedIcon sx={{ marginTop:"10px" ,padding: '10px',cursor:"pointer" }} onClick={() => this.setState({  count: this.state.count =true })}></KeyboardArrowDownRoundedIcon>
                    </Grid>
                </Grid>
            </Grid>
            <Backdrop  maxWidth="xl"  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={this.state.count}
                onClick={() => this.setState({ count: this.state.count =false })}
            >
                <Profile></Profile>
            </Backdrop>
        </Grid >
        </Grid>
        );
    }
}

export default Header;