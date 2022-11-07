// import { React, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Grid, Collapse, Card, Typography } from '@mui/material'
// import statistics from "../img/statistics.png";
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Expand from "../img/expand.png";
// import IconButton from '@mui/material/IconButton';
// import Option from "../component/option";

// export default function Sam(props) {
//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     }));
//     const navigate = useNavigate();
//   const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));
//   const [expanded, setExpanded] = useState(false);
//   let show =true;
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
// }
//     return (


//         <Box sx={{ display: "flex", justifyContent: "center", alignSelf: "center" }} marginTop="100px">
//           <Grid spacing={1}>
//             <Grid>
//                 <Card sx={{ borderRadius: "20px", maxWidth: { xl: "290px", lg: "290px", md: "290px" }, display: { sm: "none", xs: "none", xl: "block", md: "block", lg: "block" }, cursor: "pointer", margin: "0px" }}>
//                     <Grid item md={10} lg={6} xl={10} sm={5} spacing={0} sx={{ padding: "30px 30px 20px 30px", margin: "0px" }}>
//                         <Grid container justifyContent="center"
//                             alignItems="center"
//                             alignContent="center"
//                             sx={{ padding: { xl: "50px", lg: "50px", md: "50px", sm: "30px", xs: "20px" } }}
//                             borderRadius="20px"
//                             backgroundColor="#f3f5f7"
//                             component="img" src={statistics}>
//                         </Grid>
//                     </Grid>
//                     <Grid item md={2} lg={6} xl={2} sm={5} sx={{ textAlign: "center" }}>
//                         <Typography sx={{ fontFamily: "poppins", fontSize: "18px" }}>My Survey</Typography>
//                     </Grid>
//                     <Grid sx={{textAlign:"center"}}>
//                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Option OptionList={props.optionsAll} cardint={props.int}></Option>
//       </Collapse>
//       <ExpandMore sx={{padding:"0px"}}
//         expand={expanded}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more">
//           { show ?  <Grid ><Box component="img" sx={{height:"auto",width:"20px",marginTop:"10px",justifyContent:"center"}} src={Expand}/></Grid> : null }
//         </ExpandMore>
//         </Grid>
//                 </Card>
//             </Grid>
//             <Grid>
//                 <Card sx={{ borderRadius: "20px", maxWidth: { xl: "290px", lg: "290px", md: "290px" }, display: { sm: "none", xs: "none", xl: "block", md: "block", lg: "block" }, cursor: "pointer", margin: "0px" }}>
//                     <Grid item md={10} lg={6} xl={10} sm={5} spacing={0} sx={{ padding: "30px 30px 20px 30px", margin: "0px" }}>
//                         <Grid container justifyContent="center"
//                             alignItems="center"
//                             alignContent="center"
//                             sx={{ padding: { xl: "50px", lg: "50px", md: "50px", sm: "30px", xs: "20px" } }}
//                             borderRadius="20px"
//                             backgroundColor="#f3f5f7"
//                             component="img" src={statistics}>
//                         </Grid>
//                     </Grid>
//                     <Grid item md={2} lg={6} xl={2} sm={5} sx={{ textAlign: "center" }}>
//                         <Typography sx={{ fontFamily: "poppins", fontSize: "18px" }}>My Survey</Typography>
//                     </Grid>
//                     <Grid sx={{textAlign:"center"}}>
//                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Option OptionList={props.optionsAll} cardint={props.int}></Option>
//       </Collapse>
//       <ExpandMore sx={{padding:"0px"}}
//         expand={expanded}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more">
//           { show ?  <Grid ><Box component="img" sx={{height:"auto",width:"20px",marginTop:"10px",justifyContent:"center"}} src={Expand}/></Grid> : null }
//         </ExpandMore>
//         </Grid>
//                 </Card>
//             </Grid>
//             <Grid>
//                 <Card sx={{ borderRadius: "20px", maxWidth: { xl: "290px", lg: "290px", md: "290px" }, display: { sm: "none", xs: "none", xl: "block", md: "block", lg: "block" }, cursor: "pointer", margin: "0px" }}>
//                     <Grid item md={10} lg={6} xl={10} sm={5} spacing={0} sx={{ padding: "30px 30px 20px 30px", margin: "0px" }}>
//                         <Grid container justifyContent="center"
//                             alignItems="center"
//                             alignContent="center"
//                             sx={{ padding: { xl: "50px", lg: "50px", md: "50px", sm: "30px", xs: "20px" } }}
//                             borderRadius="20px"
//                             backgroundColor="#f3f5f7"
//                             component="img" src={statistics}>
//                         </Grid>
//                     </Grid>
//                     <Grid item md={2} lg={6} xl={2} sm={5} sx={{ textAlign: "center" }}>
//                         <Typography sx={{ fontFamily: "poppins", fontSize: "18px" }}>My Survey</Typography>
//                     </Grid>
//                     <Grid sx={{textAlign:"center"}}>
//                     <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Option OptionList={props.optionsAll} cardint={props.int}></Option>
//       </Collapse>
//       <ExpandMore sx={{padding:"0px"}}
//         expand={expanded}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more">
//           { show ?  <Grid ><Box component="img" sx={{height:"auto",width:"20px",marginTop:"10px",justifyContent:"center"}} src={Expand}/></Grid> : null }
//         </ExpandMore>
//         </Grid>
//                 </Card>
//             </Grid>
//             </Grid>
           
//             <Box sx={{ display: { lg: "none", xl: "none",md:"none" } }}>
//                 <Card sx={{minWidth:{xs:"340px",sm:"450px"},height:"auto"}}>
//                 <Grid container direction="row">
//                     <Grid item xs={6} sm={6} sx={{backgroundColor:"#f3f5f7",display:"flex",justifyContent:"center"}}>
//                     <Box component="img" width="50%" height="auto" src={statistics}  />
//                     </Grid>
//                     <Grid item xs={6} sm={6} sx={{alignSelf:"center",paddingLeft:"30px"}}>
//                     <Typography sx={{fontSize:{xs:"18px",sm:"22px"}}} >My Survey <span> <Box component="img" sx={{height:"auto",width:"20px",float:"right",paddingRight:"10px"}} src={Expand}/></span></Typography>
//                     </Grid>
//                 </Grid>
//                 </Card>
//             </Box>
//         </Box>
//     )
// }


////////////////////////////////////////////////////////////////// New Header /////////////////////////////////////////////////////////////////////
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
    Divider,CssBaseline,
    AppBar
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
        <>
        <AppBar  position="static" sx={{backgroundColor: "#ffff" }}>
        <Grid container>
        <Grid item md={5} lg={5} xl={5} sm={6} xs={6}>
            <Grid item container >
                <Avatar src={logo} style={{ width: "auto", height: 40}} />
                <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center", display:{sm:"none",xs:"none",xl:"block",lg:"block",md:"block"} }}>Smart Patient Engagement</Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "Copperplate Gothic", fontWeight: '500', color: "#0D224C", textAlign: "center", display:{xl:"none",lg:"none",md:"none"} }}>SPE</Typography>

            </Grid>
            </Grid>
            <Grid item md={7} lg={7} xl={7} sm={6} xs={6}>
            <Grid item  container sx={{backgroundColor:"red"}} >
              <Typography>fsfgsfgsfgvsv</Typography>
            </Grid>
            </Grid>
        <Backdrop   sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={this.state.count}
            onClick={() => this.setState({ count: this.state.count =false })}
        >
            <Profile></Profile>
        </Backdrop>
        </Grid>
        </AppBar>
       
    
     <Grid maxWidth="deviceWidth"  height="5px" sx={{backgroundColor:"#F3F5F7"}}></Grid>
     </>
     
    );
}
}
export default Header;