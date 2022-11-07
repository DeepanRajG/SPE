// import React, { Component } from "react";
// import '../css/App.css'
// import logo from '../img/logo.png'
// import mic from '../img/mic.png'
// import text from '../img/text.png'
// import alert from '../img/alert.svg'
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
// import Profile from '../pages/profilePage.js'
// import {
//     Avatar,
//     Grid,
//     Backdrop,
//     Typography,
//     Divider
// } from "@mui/material";
// class Header extends Component {
//     state = {
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: false
//         };
//     }
//     render() {
//         return (
//             <div>
//             <Grid  spacing={0}>
//             <Grid item  container sx={{ height: "60px"}}>
//             <Grid item lg={6} alignSelf="center" >
//                 <Grid item container direction="row" >
//                     <Avatar src={logo} style={{ width: "auto", height: 40, marginLeft: "50px" }} />
//                     <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center", margin: "5px 0px 0px 10px" }}>Smart Patient Engagement</Typography>
//                 </Grid>
//             </Grid>
//             <Grid item lg={6}  >
//                     <Grid item container direction="row" sx={{display: "flex",justifyContent: "flex-end",}} >
//                     <Grid  item container md={5} sx={{justifyContent: "flex-end",marginTop:"0px", }} >
//                     <Grid display={this.props.displayP}>
                        
//                     <Divider orientation="vertical" sx={{ padding:"0px 10px 0px 10px",height:"92%"}}  />
//                     <Avatar src={alert} style={{ width: 30, height: 30,padding:"5px 0px 10px 10px",marginTop:"10px" }} />
//                     <Typography sx={{ padding: "10px 0px 10px 10px", fontSize: "15px", fontFamily: "poppins", color: "#FA273E",marginTop:"10px" }} >Emergency</Typography>
//                     <Divider orientation="vertical" sx={{ padding:"0px 10px 0px 0px",alignSelf:"stretch",height:"92%"}}  />
//                     <Avatar src={mic} style={{ width: 30, height: 30,padding:"17px 10px" }} />
//                     <Divider orientation="vertical" sx={{height:"92%"}}  />
//                     <Avatar src={text} style={{ width: 30, height: 45,padding:"10px"}} />
//                     </Grid>
//                     </Grid>
//                     <Grid item container md={5} sx={{justifyContent:"center",marginRight:"30px"}} >
//                     <Divider orientation="vertical" sx={{height:"92%"}} />
//                     <Typography sx={{ padding: "10px 0px 10px 10px", fontSize: "22px", fontFamily: "poppins", fontWeight: '400', color: "#0D224C",marginTop:"5px" }}> <font color="#E62E22">R</font>12</Typography>
//                     <Divider orientation="vertical" sx={{ padding: "0px 10px 0px 0px",height:"92%"}} />
//                     <Typography sx={{ padding: "10px", fontSize: "22px", fontFamily: "poppins", fontWeight: '300', color: "#0D224C",marginTop:"5px", }}><font color="#E62E22" >B</font>12</Typography>
//                     <Divider orientation="vertical" sx={{ padding: "0px 0px ",height:"92%"}} />
//                     <NotificationsIcon sx={{ padding: "10px 0px 10px 10px",marginTop:"10px" }}></NotificationsIcon>
//                     <Divider orientation="vertical" sx={{ padding: "0px 10px 0px 0px",height:"92%"}} />
//                     <Avatar src={this.props.profile} style={{ width: 40, height: 40,marginLeft:"10px" ,marginTop:"10px",cursor:"pointer"}} onClick={() => this.setState({  count: this.state.count =true })}/>
//                     <Typography sx={{ padding: "10px", fontSize: "15px", fontFamily: "poppins", fontWeight: '600', color: "#0D224C" ,marginTop:"10px",cursor:"pointer"}} onClick={() => this.setState({  count: this.state.count =true })}>{this.props.name}</Typography>
//                     <KeyboardArrowDownRoundedIcon sx={{ marginTop:"10px" ,padding: '10px 0px',cursor:"pointer" }} onClick={() => this.setState({  count: this.state.count =true })}></KeyboardArrowDownRoundedIcon>
//                     </Grid>
//                 </Grid>
//             </Grid>
//             <Backdrop   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open={this.state.count}
//                 onClick={() => this.setState({ count: this.state.count =false })}
//             >
//                 <Profile></Profile>
//             </Backdrop>
//         </Grid >
//         </Grid>
//          <Grid maxWidth="deviceWidth"  height="5px" sx={{backgroundColor:"#F3F5F7"}}></Grid>
//          </div>
//         );
//     }
// }
// export default Header;


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
        <Grid item md={5} lg={5} xl={5} sm={6} xs={6}>
            <Grid item container style={{padding:"10px"}}  >
                <Avatar src={logo} style={{ width: "auto", height: 40}} />
                <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C" ,marginTop:"5px",display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"block"} }}>Smart Patient Engagement</Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center",marginTop:"5px", display:{xl:"none",lg:"none",md:"none"} }}>SPE</Typography>
            </Grid>
            </Grid>
            <Grid item md={7} lg={7} xl={7} sm={6} xs={6}>
            <Grid item  container sx={{justifyContent:"flex-end"}} >
              <img
             alt="some value"
             component="img"
             src={bar}
             style={{ paddingLeft: "10px", paddingRight: "10px" }} />
             <Avatar src={alert} style={{ width: 35, height: 35,padding:"10px" }} />
             <Grid sx={{display:{sm:"none",xs:"none",xl:"flex",lg:"flex",md:"flex"}}}>
            <Grid display={this.props.displayP}>
                   <Typography
                      style={{ color: "#FA273E", marginTop: "12px", paddingLeft: "10px",fontSize: "15px", fontFamily: "poppins", color: "#FA273E"}}
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
                    //  className={classes.logo}
                   >
                      R
                     </Typography>
                    <Typography
                    style={{ color: "#000000", marginTop: "10px" }}
                      variant="h6"
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
                      style={{ color: "#E62E22", marginTop: "10px" }}
                      variant="h6"
                      //  className={classes.logo}
                    >
                      B
                    </Typography>
                    <Typography
                     style={{ color: "#000000", marginTop: "10px" }}
                      variant="h6"
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
                    <NotificationsIcon style={{ color: "#000000", marginTop: "12px" }} />
                    {/* Divider */}
                    <img
                       alt="some value"
                       component="img"
                      src={bar}
                      style={{ paddingLeft: "10px", paddingRight: "10px" }}
                     />
                     </Grid>
                     <Avatar src={this.props.profile}  style={{ width: 40, height: 40, margin: "10px", cursor: "pointer" }} onClick={() => this.setState({  count: this.state.count =true })} />                   
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