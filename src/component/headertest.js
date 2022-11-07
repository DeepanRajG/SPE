// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   CssBaseline,
//   Typography,
//   Avatar,
 
//   Backdrop,
//   Grid,
//   useTheme,
//   useMediaQuery,
//   Popover,
//   Button,
// } from "@mui/material";
// import { makeStyles }from "@material-ui/core";
// import { styled } from '@mui/material/styles';
// import DrawerComponent from "./drawer.js";
// import text from '../img/text.png'
// import Profile from '../pages/profilePage.js'
// import bar from "../img/br.svg";
// import mic from '../img/mic.png'
// import alert from '../img/alert.svg'
// import InfoIcon from "@mui/icons-material/Info";
// import TextFieldsIcon from "@mui/icons-material/TextFields";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(5),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   emg: {
//     color: "white",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));
// const Header = ({ profile, name,displayP}) => {
//   const [count, setCount] = useState(false);
//   const classes = useStyles();
//   const handleEvent = () => {
//     setCount(true);
    
//   }
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;
//   return (
    
//     <div>

//     <AppBar elevation={0} style={{ backgroundColor: "#ffff" }} position="static">
//       <CssBaseline />
//       <Toolbar>
//         <img
//           alt="logo"
//           component="img"
//           src="https://ipmo.devtest.ainqaplatform.in/images/kpj-logo.png"
//           style={{
//             width: "70px",
//             height: "50px",
//             paddingRight: "10px",
//           }}
//         ></img>
        
//         <Typography

//           style={{ color: "#000000", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C",fontSize: "20px" }}
//           className={classes.logo}
//         >
//           Smart Patient Engagement
//         </Typography>
//         {isMobile ? (
//           <DrawerComponent profile={profile}/>         
//         ) : (
//         <Grid className={classes.navlinks}>
//           {/* Divider */}
//           <Grid display={displayP}>
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           />
            
           
//            <Avatar src={alert} style={{ width: 30, height: 30, marginTop: "8px" }} />
          
//           <Typography
//             style={{ color: "#FA273E", marginTop: "12px", paddingLeft: "10px",fontSize: "15px", fontFamily: "poppins", color: "#FA273E"}}
//             variant="h6"
//             className={classes.logo}
//           >
//             Emergency
//           </Typography>
         
//           {/* Divider */}
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           />
//           <img
//             alt="some value"
//             component="img"
//             src={mic}
//             style={{
//               paddingLeft: "10px",
//               paddingRight: "10px",
//               height: "30px",
//               marginTop:"8px"
//             }}
//           />
        
//           {/* Divider */}
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           />
//          <Avatar src={text} style={{ marginTop:"5px" }}/>
//          </Grid>
//           {/* Divider */}
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           /> 
          
//           <Typography
//             style={{ color: "#E62E22", marginTop: "10px" }}
//             variant="h6"
//             className={classes.logo}
//           >
//             R
//           </Typography>
//           <Typography
//             style={{ color: "#000000", marginTop: "10px" }}
//             variant="h6"
//             className={classes.logo}
//           >
//             12
//           </Typography>
//           {/* Divider */}
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           />
//           <Typography
//             style={{ color: "#E62E22", marginTop: "10px" }}
//             variant="h6"
//             className={classes.logo}
//           >
//             B
//           </Typography>
//           <Typography
//             style={{ color: "#000000", marginTop: "10px" }}
//             variant="h6"
//             className={classes.logo}
//           >
//             12
//           </Typography>
//           {/* Divider */}
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           />
//           <NotificationsIcon style={{ color: "#000000", marginTop: "12px" }} />
//           {/* Divider */}
//           <img
//             alt="some value"
//             component="img"
//             src={bar}
//             style={{ paddingLeft: "10px", paddingRight: "10px" }}
//           />
//           <Avatar src={profile} style={{ width: 40, height: 40, marginTop: "5px", cursor: "pointer" }} onClick={handleEvent} />
//           <Typography style={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: '600', color: "black", cursor: "pointer",marginTop: "4px"}} onClick={handleEvent} >{name}</Typography>
//           <KeyboardArrowDownIcon
//             style={{ color: "#000000", marginTop: "13px" }}
//             onClick={handleEvent}
//           />   
            
//         </Grid>
        
//            )} 
          
//       </Toolbar>
//       <Backdrop maxWidth="lg" style={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1,paddingBottom:"500px",paddingRight:"100px"}}
//             open={count}
//             onClick={() => setCount(false)}
//           >
//             <Profile></Profile>
//           </Backdrop>
//     </AppBar>
//     <Grid container maxWidth="deviceWidth" height="5px" position="inherit" backgroundColor="#F3F5F7">
      
//     </Grid>
//     </div>
   
//   );
// }
// export default Header;
import React, { Component } from "react";
import '../css/App.css'
import bar from "../img/br.svg";
import logo from '../img/logo.png'
import mic from '../img/mic.png'
import text from '../img/text.png'
import alert from '../img/alert.svg'
import noti from '../img/noti.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Profile from '../pages/profilePage.js'
import { makeStyles }from "@material-ui/core";

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
            <Grid item container style={{padding:"10px 0px 0px 50px"}}  >
                <Avatar src={logo} style={{ width: "auto", height: 40,paddingRight:"10px"}} />
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
                    <img
                       alt="some value"
                       component="img"
                      src={bar}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                     />
                     </Grid>
                     <Avatar src={this.props.profile}  style={{ width: 40, height: 40, marginTop: "8px", cursor: "pointer" }} onClick={() => this.setState({  count: this.state.count =true })}/>
                     <Typography sx={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: '600', color: "#0D224C" ,marginTop:"10px",cursor:"pointer"}} onClick={() => this.setState({  count: this.state.count =true })}>{this.props.name}</Typography>
                     <KeyboardArrowDownRoundedIcon sx={{ marginTop:"10px" ,padding: '10px 0px',cursor:"pointer",display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"block"} }} onClick={() => this.setState({  count: this.state.count =true })}></KeyboardArrowDownRoundedIcon>
            </Grid>
            </Grid>
        <Backdrop   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
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