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
import { makeStyles } from "@material-ui/core";
import noti from '../img/noti.png'
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Grid,
  Backdrop,
  Typography,
  Divider, CssBaseline,
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
        <Grid container item style={{ alignContent: "center", height: "60px" }}>
          {/* <Grid container item sm={12} md={12} lg={12} xl={12} > */}
          <Grid container item md={4} lg={5} xl={5} sm={6} xs={6} alignItems="center">
            <Grid item sx={{ padding: { md: "5px 0px 0px 50px", lg: "5px 0px 0px 50px", xl: "5px 0px 0px 44px", sm: "5px 20px 5px 20px", xs: "5px 20px 5px 20px" } }}  >
              <div style={{ display: "inline-flex", }}>
                <Avatar src={logo} style={{ paddingRight: "10px", alignSelf: "center", height: 35, width: "auto" }} />
                <Typography sx={{ fontSize: "24px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", alignSelf: "center", display: { sm: "none", xs: "none", xl: "block", lg: "block", md: "block" } }}>Smart Patient Engagement</Typography>
                <Typography sx={{ fontSize: "24px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center", marginTop: "5px", display: { xl: "none", lg: "none", md: "none" } }}>SPE</Typography>
              </div>
              {/* <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", alignSelf: "center" }}>SPE</Typography> */}
            </Grid>
          </Grid>
          <Grid container item md={8} lg={7} xl={7} sm={6} xs={6}>
            <Grid container item sx={{ justifyContent: "flex-end", padding: { xl: "0px 40px 0px 20px", md: "0px 40px 0px 20px", sm: "0px 18px 0px 20px", xs: "0px 18px 0px 20px" } }} >
              <Grid item container justifyContent="flex-end">
                <Grid item sx={{ display: { sm: "flex", xs: "flex", xl: "flex", lg: "flex", md: "flex" } }} >
                  <Grid display={this.props.displayP}>
                  <div style={{ display: "flex" }} >
                    


                    <img
                      alt="some value"
                      component="img"
                      src={bar}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    />


                    <Avatar src={alert} sx={{ width: 25, height: 25, alignSelf: "center", marginRight: { md: "10px", xl: "10px" } }} />

                    <Typography
                      style={{ color: "#FA273E", alignSelf: "center", paddingRight: "10px", fontSize: "15px", fontFamily: "poppins", color: "#FA273E" }}
                      sx={{ display: { sm: "none", xs: "none", xl: "flex", lg: "flex", md: "flex" } }}
                      variant="h6"
                    // className={classes.logo}
                    >
                      Emergency
                    </Typography>
                    <Grid item container sx={{ display: { sm: "none", xs: "none", xl: "flex", lg: "flex", md: "flex" } }}>

                      {/* Divider */}
                      <img
                        alt="some value"
                        component="img"
                        src={bar}
                        style={{ paddingLeft: "1px", paddingRight: "5px" }}
                      />
                      <img
                        alt="some value"
                        component="img"
                        src={mic}
                        style={{ width: 32, height: 32, padding: " 0px 5px 0px 5px", alignSelf: "center" }}
                      />
                      {/* Divider */}
                      <img
                        alt="some value"
                        component="img"
                        src={bar}
                        style={{ paddingLeft: "5px" }}
                      />
                      <Avatar src={text} style={{ padding: "0px 5px 0px 5px", alignSelf: "center", width: 45, height: 45 }} /></Grid>
                  </div>
                  </Grid>

                </Grid>
                <Grid item sx={{ display: { sm: "none", xs: "none", xl: "flex", lg: "flex", md: "flex" } }}>
                  {/* Divider */}
                  <img
                    alt="some value"
                    component="img"
                    src={bar}
                    style={{ paddingRight: "10px" }}
                  />
                  <div style={{ display: "flex" }}>
                    <Typography
                      style={{ color: "#E62E22", alignSelf: "center", fontSize: "20px" }}
                    //  className={classes.logo}
                    >
                      R
                    </Typography>
                    <Typography
                      style={{ color: "#000000", alignSelf: "center", fontSize: "20px" }}
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
                      style={{ color: "#E62E22", alignSelf: "center", fontSize: "20px" }}
                    //  className={classes.logo}
                    >
                      B
                    </Typography>
                    <Typography
                      style={{ color: "#000000", alignSelf: "center", fontSize: "20px" }}
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
                      style={{ height: "22px", padding: "0px 10px 0px 10px", alignSelf: "center" }}
                    />
                  </div>
                  {/* Divider */}
                </Grid>
                <img
                  alt="some value"
                  component="img"
                  src={bar}
                  style={{ paddingLeft: "10px", paddingRight: "10px" }}
                />
                <Avatar src={this.props.profile} style={{ width: 40, height: 40, alignSelf: "center", cursor: "pointer" }} onClick={() => this.setState({ count: this.state.count = true })} />
                <Typography sx={{ paddingLeft: "10px", fontSize: "15px", fontFamily: "poppins", display: { sm: "none", xs: "none", xl: "flex", lg: "flex", md: "flex" }, fontWeight: '600', color: "#0D224C", cursor: "pointer", alignItems: "center" }} onClick={() => this.setState({ count: this.state.count = true })}>{this.props.name}</Typography>
                <KeyboardArrowDownRoundedIcon sx={{ cursor: "pointer", display: { sm: "none", xs: "none", xl: "block", lg: "block", md: "block" }, alignSelf: "center" }} onClick={() => this.setState({ count: this.state.count = true })}></KeyboardArrowDownRoundedIcon>
              </Grid>

            </Grid>
          </Grid>
          {/* </Grid> */}
          <Backdrop sx={{ color: '#fff', padding: "134px 53px 0px 0px", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={this.state.count}
            onClick={() => this.setState({ count: this.state.count = false })}
          >
            <Profile></Profile>
          </Backdrop>
        </Grid>
        {/* </AppBar> */}
        <Grid maxWidth="deviceWidth" height="5px" sx={{ backgroundColor: "#F3F5F7" }}></Grid>
      </>
    );
  }
}
export default Header;