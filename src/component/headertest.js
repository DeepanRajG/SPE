import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Avatar,
 
  Backdrop,
  Grid,
  useTheme,
  useMediaQuery,
  Popover,
  Button,
} from "@mui/material";
import { makeStyles }from "@material-ui/core";
import { styled } from '@mui/material/styles';
import DrawerComponent from "./drawer.js";
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
const Header = ({ profile, name,displayP}) => {
  const [count, setCount] = useState(false);
  const classes = useStyles();
  const handleEvent = () => {
    setCount(true);
    
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
    <AppBar elevation={0} style={{ backgroundColor: "#ffff" }} position="static">
      <CssBaseline />
      <Toolbar>
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
          Smart Patient Engagement
        </Typography>
        {isMobile ? (
          <DrawerComponent profile={profile}/>         
        ) : (
        <Grid className={classes.navlinks}  >
          {/* Divider */}
          <Grid display={displayP}>
          <img
            alt="some value"
            component="img"
            src={bar}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
            
           
           <Avatar src={alert} style={{ width: 30, height: 30, marginTop: "8px" }} />
          
          <Typography
            style={{ color: "#FA273E", marginTop: "12px", paddingLeft: "10px",fontSize: "15px", fontFamily: "poppins", color: "#FA273E"}}
            variant="h6"
            className={classes.logo}
          >
            Emergency
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
            src={mic}
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              height: "30px",
              marginTop:"8px"
            }}
          />
        
          {/* Divider */}
          <img
            alt="some value"
            component="img"
            src={bar}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
         <Avatar src={text} style={{ marginTop:"5px" }}/>
         </Grid>
          {/* Divider */}
          <img
            alt="some value"
            component="img"
            src={bar}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          /> 
          
          <Typography
            style={{ color: "#E62E22", marginTop: "10px" }}
            variant="h6"
            className={classes.logo}
          >
            R
          </Typography>
          <Typography
            style={{ color: "#000000", marginTop: "10px" }}
            variant="h6"
            className={classes.logo}
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
            style={{ color: "#E62E22", marginTop: "10px" }}
            variant="h6"
            className={classes.logo}
          >
            B
          </Typography>
          <Typography
            style={{ color: "#000000", marginTop: "10px" }}
            variant="h6"
            className={classes.logo}
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
          <NotificationsIcon style={{ color: "#000000", marginTop: "12px" }} />
          {/* Divider */}
          <img
            alt="some value"
            component="img"
            src={bar}
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          />
          <Avatar src={profile} style={{ width: 40, height: 40, marginTop: "5px", cursor: "pointer" }} onClick={handleEvent} />
          <Typography style={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: '600', color: "black", cursor: "pointer",marginTop: "4px"}} onClick={handleEvent} >{name}</Typography>
          <KeyboardArrowDownIcon
            style={{ color: "#000000", marginTop: "13px" }}
            onClick={handleEvent}
          />   
            
        </Grid>
        
          )}
          <Backdrop maxWidth="lg" style={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,paddingBottom:"500px",paddingRight:"100px"}}
            open={count}
            onClick={() => setCount(false)}
          >
            <Profile></Profile>
          </Backdrop>
      </Toolbar>
    </AppBar>
    <Grid container maxWidth="deviceWidth" height="5px" position="inherit" backgroundColor="#F3F5F7">
      
    </Grid>
    </div>
   
  );
}
export default Header;
