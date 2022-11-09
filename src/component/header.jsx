//////////////////////////////////////////////////////////////////// NEW HEADER //////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import '../css/App.css'
import bar from "../img/br.svg";
import logo from '../img/logo.png'
import mic from '../img/mic.png'
import text from '../img/text.png'
import alert from '../img/alert.svg'
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Profile from '../pages/profilePage.js'
import { makeStyles }from "@material-ui/core";
import noti from '../img/noti.png'
import { withStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Grid,
    Backdrop,
    Typography,
    Divider,CssBaseline,
    AppBar
} from "@mui/material";
import { styled } from '@mui/material/styles';
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  emg: {
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
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
        <>
        {/* <AppBar  position="static" sx={{backgroundColor: "#ffff" }}> */}
        <Grid container>
        <Grid item md={4} lg={5} xl={5} sm={6} xs={6}>
            <Grid item container sx={{padding:{md:"10px 0px 0px 50px",lg:"10px 0px 0px 50px",xl:"10px 0px 0px 50px",sm:"5px 20px 5px 20px",xs:"5px 20px 5px 20px"}}}  >
                <Avatar src={logo} sx={{ width: "auto", height: 40,paddingRight:"10px"}} />
                <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C" ,marginTop:"5px",display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"none"} }}>Smart Patient Engagement</Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center",marginTop:"5px", display:{xl:"none",lg:"none",md:"block"} }}>SPE</Typography>
            </Grid>
            </Grid>
            <Grid item md={8} lg={7} xl={7} sm={6} xs={6}>
            <Grid item  container sx={{justifyContent:"flex-end",padding:"0px 20px 0px 20px"}} >
            <img
                      alt="some value"
                    component="img"
                       src={bar}
                      style={{ paddingLeft: "10px"}}
                     />
             <Avatar src={alert} style={{ width: 25, height: 25,padding:"15px 0px 10px 10px" }} />
             <Grid sx={{display:{sm:"none",xs:"none",xl:"flex",lg:"flex",md:"flex"}}}>
            <Grid display={this.props.displayP}>
                   <Typography
                      style={{ color: "#FA273E", marginTop: "15px", paddingLeft: "10px",fontSize: "15px", fontFamily: "poppins", color: "#FA273E"}}
                      variant="h6"
                      // className={classes.logo}
                   >
                     Emergency
                    </Typography>
                   {/* Divider */}
                    <img
                      alt="some value"
                    component="img"
                       src={bar}
                      style={{ paddingLeft: "5px", paddingRight: "5px" }}
                     />
                   <img
                       alt="some value"
                      component="img"
                      src={mic}
                      style={{ width: 32, height: 32,padding:" 10px 5px 0px 5px" }} 
                     />
                    {/* Divider */}
                   <img
                      alt="some value"
                      component="img"
                      src={bar}
                     style={{ paddingLeft: "5px" }}
                   />
                  <Avatar src={text} style={{padding:"5px" ,width: 45, height:45}}/>
             </Grid>
                    {/* Divider */}
                    <img
                       alt="some value"
                      component="img"
                      src={bar}
                     style={{  paddingRight: "10px" }}
                  />
                    <Typography
                       style={{ color: "#E62E22", marginTop: "10px",fontSize: "20px" }}
                    //  className={classes.logo}
                   >
                      R
                     </Typography>
                    <Typography
                    style={{ color: "#000000", marginTop: "10px",fontSize: "20px"  }}
                    //  className={classes.logo}
                    >
                      12
                    </Typography>
                    {/* Divider */}
                    <img
              alt="some value"
                       component="img"
                     src={bar}
                     style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    />
                   <Typography
                      style={{ color: "#E62E22", marginTop: "10px" ,fontSize: "20px"}}
                      //  className={classes.logo}
                    >
                      B
                    </Typography>
                    <Typography
                     style={{ color: "#000000", marginTop: "10px" ,fontSize: "20px"}}
                      // className={classes.logo}
                    >
                      12
                   </Typography>
                    {/* Divider */}
                     <img
                      alt="some value"
                       component="img"
                       src={bar}
                       style={{ paddingLeft: "10px", paddingRight: "10px" }}
                   />
                    <img
                      alt="some value"
                    component="img"
                       src={noti}
                      style={{height:"22px",padding:"10px",marginTop:"5px"}}
                     />
                    {/* Divider */}
                    </Grid>
                    <img
                       alt="some value"
                       component="img"
                      src={bar}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                     />
                     
                     <Avatar src={this.props.profile}  style={{ width: 40, height: 40, marginTop: "8px", cursor: "pointer" }} onClick={() => this.setState({  count: this.state.count =true })}/>
                     <Typography sx={{ padding: "10px", fontSize: "15px", fontFamily: "poppins",display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"block"},fontWeight: '600', color: "#0D224C" ,marginTop:"10px",cursor:"pointer"}} onClick={() => this.setState({  count: this.state.count =true })}>{this.props.name}</Typography>
                     <KeyboardArrowDownRoundedIcon sx={{ marginTop:"10px" ,padding: '10px 0px',cursor:"pointer",display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"block"} }} onClick={() => this.setState({  count: this.state.count =true })}></KeyboardArrowDownRoundedIcon>
            </Grid>
            </Grid>
        <Backdrop   sx={{ color: '#fff',zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={this.state.count}
            onClick={() => this.setState({ count: this.state.count =false })}
        >
            <Profile></Profile>
        </Backdrop>
        </Grid>
        {/* </AppBar> */}
     <Grid maxWidth="deviceWidth"  height="5px" sx={{backgroundColor:"#F3F5F7"}}></Grid>
     </>
    );
}
}
export default Header;