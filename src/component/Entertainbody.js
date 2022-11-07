// import React from "react";
// import {
//   Container,
//   Grid,
//   Box,
// } from "@mui/material";
// import net from "../img/mnetflix.png";
// function Entertain(props) {
//     const onclickyoutube =()=>{
//      window.open(props.url[props.int]);
//      console.log("props.src");
//   }
//   return(
//      <Container maxWidth="deviceWidth" style={{ height: "10%", padding: "0px" }}>
//     <Grid container direction="row"  >
//               <Grid item  md={4}  style={{ width:"360px",height: "190px",justifyContent:"center"}} onClick={onclickyoutube}>
//               <Box component="img" src={props.src[props.int]} sx={{height:"180px",width:"355px",cursor:"pointer",minHeight:{xl:"180px",md:"130px"},maxWidth:{xl:"355px",md:"300px"}}}/>
//               </Grid>
//               </Grid>
//        </Container>
//   );
//     }
//     export default Entertain;


import React from "react";
import {
  Container,
  Grid,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
<<<<<<< Updated upstream:src/component/Entertainbody.js
function Entertain(props) {
    const onclickyoutube =()=>{
     window.open(props.url[props.int]);
     console.log("props.src");
  }
  return(
     <Container maxWidth="xl" style={{ height: "10%", padding: "0px" }}>
    <Grid container direction="row" spacing={1} >
              <Grid item  md={3}  sx={{width:"80px",height: "190px"}} onClick={onclickyoutube}>
              <Box component="img" src={props.src[props.int]} sx={{height:"180px",width:"360px",cursor:"pointer",minHeight:{xl:"180px",md:"130px"},minWidth:{xl:"360px",md:"300px"}}}/>
=======
import net from "../img/mnetflix.png";
import disney from "../img/disney.png";
export  const Entertain = (props) => {
  const onclickyoutube =()=>{
    window.open(props.url[props.int]);
    console.log("props.src");
 }
  return (
    <Container maxWidth="device-width" style={{ height: "10%",padding:"0px"}}>
   <Grid container direction="row" spacing={1} >
   <Grid item  xl={3} lg={4} md={4} onClick={onclickyoutube}>

<Box component="img" src={props.src[props.int]} sx={{height:"180px",width:"353px",cursor:"pointer",minHeight:{xl:"180px",lg:"150px",md:"130px"},maxWidth:{xl:"380px",lg:"300px",md:"300px"}}}/>

</Grid>
             </Grid>
      </Container>
 );
}
export  const Entertainn = (props) => {
  const onclickyoutube =()=>{
    window.open(props.url[props.int]);
    console.log("props.src");
 }
 return (
  // <Container fixed marginLeft="0%" maxWidth="deviceWidth" style={{ height: "10%", padding: "0px" }}>
      <Grid container direction="column" spacing={1} justifyContent= "center" marginLeft="0px" >
          <Grid item sm={3} xs={3} style={{ alignItems: "center", justifyContent: "center" ,display:"flex",flexDirection:"column"}}>
              <Grid >
                  <Avatar style={{ width: "50px", height: "auto" }} src={net} />
>>>>>>> Stashed changes:src/pages/Entertainbody.js
              </Grid>
              <Grid>
                  <Typography style={{ paddingTop: "20px" }} >Netflix</Typography>
              </Grid>
          </Grid>
      </Grid>
  // </Container>
);
}
// function Entertain(props) {
//     const onclickyoutube =()=>{
//      window.open(props.url[props.int]);
//      console.log("props.src");
//   }
//   return(
//      <Container maxWidth="device-width" style={{ height: "10%",padding:"0px"}}>
//     <Grid container direction="row" spacing={1} >
//     <Grid item  xl={3} lg={4} md={4} onClick={onclickyoutube}>

// <Box component="img" src={props.src[props.int]} sx={{height:"180px",width:"353px",cursor:"pointer",minHeight:{xl:"180px",lg:"150px",md:"130px"},maxWidth:{xl:"360px",lg:"300px",md:"300px"}}}/>

// </Grid>
//               </Grid>
//        </Container>
//   );
//     }
//     export default Entertain;