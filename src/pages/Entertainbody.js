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
     <Container maxWidth="xl" style={{ height: "10%", padding: "0px" }}>
    <Grid container direction="row" spacing={1} >
              <Grid item  md={3}  sx={{width:"80px",height: "200px"}} onClick={onclickyoutube}>
              <Box component="img" src={props.src[props.int]} sx={{height:"190px",width:"360px",minHeight:{xl:"190px",md:"140px"},minWidth:{xl:"360px",md:"300px"}}}/>
              </Grid>
              </Grid>
       </Container>
  );
    }
    export default Entertain;