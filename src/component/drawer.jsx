import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    Avatar,
    makeStyles,
    Backdrop,
    Grid,
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";
import text from '../img/text.png'
import Profile from '../pages/profilePage.js'
import bar from "../img/br.svg";
import mic from '../img/mic.png'
import alert from '../img/alert.svg'
import InfoIcon from "@mui/icons-material/Info";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
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
function DrawerComponent({ profile,name}) {
    const [count, setCount] = useState(false);
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleEvent = () => {
    setCount(true);
  }
  return (
    <AppBar elevation={0} style={{ backgroundColor: "#ffff",boxShadow:"none"}}>
    <CssBaseline />
    <Toolbar style={{boxShadow:"none"}}>
      <img
        alt="logo"
        component="img"
        src="https://ipmo.devtest.ainqaplatform.in/images/kpj-logo.png"
        style={{
          width: "70px",
          height: "50px",
          paddingRight: "10px",
        }}
      ></img>
      <Typography
        style={{ color: "#000000", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C",fontSize: "20px" }}
        className={classes.logo}
      >
       SPE
      </Typography>
      <Grid className={classes.navlinks}> 
          {/* Divider */}
          <img
            alt="some value"
            component="img"
            src={bar}
            
          />
          <Avatar src={alert} style={{ width: 30, height: 30, marginTop: "8px" }} />
          <img
            alt="some value"
            component="img"
            src={bar}
            
          />
          
         
          <img
            alt="some value"
            component="img"
            src={bar}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
          <Avatar src={profile} style={{ width: 40, height: 40, marginTop: "5px", cursor: "pointer" }} onClick={handleEvent} />
          </Grid>
      </Toolbar>
      <Backdrop maxWidth="lg" style={{ color: '#fff', marginRight:"40px",marginTop:"100px",position:"absolute",zindex: (theme)=>theme.zindex.drawer + 1 }}
            open={count}
            onClick={() => setCount(false)}
          >
            <Profile></Profile>
          </Backdrop>
      </AppBar>
  );
}
export default DrawerComponent;