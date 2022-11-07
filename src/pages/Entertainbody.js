import React from "react";
import {
  Container,
  Grid,
  Box,
} from "@mui/material";
function Entertain(props) {
    const onclickyoutube =()=>{
     window.open(props.url[props.int]);
     console.log("props.src");
  }
  return(
     <Container maxWidth="device-width" style={{ height: "10%"}}>
    <Grid container direction="row" spacing={1} >
              <Grid item xl={3} lg={3} md={3} sm={6} xs={12} onClick={onclickyoutube}>
              <Box component="img" src={props.src[props.int]} sx={{height:"180px",width:"360px",cursor:"pointer",maxHeight:{xl:"280px",lg:"180px",md:"130px",sm:"150px",xs:"150px"},maxWidth:{xl:"370px",lg:"360px",md:"260px",sm:"300px",xs:"270px"}}}/>
              </Grid>
              </Grid>
       </Container>
  );
    }
    export default Entertain;