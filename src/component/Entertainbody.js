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
              <Grid item  md={3}  sx={{width:"80px",height: "190px"}} onClick={onclickyoutube}>
              <Box component="img" src={props.src[props.int]} sx={{height:"180px",width:"360px",cursor:"pointer",minHeight:{xl:"180px",md:"130px"},minWidth:{xl:"360px",md:"300px"}}}/>
              </Grid>
              </Grid>
       </Container>
  );
    }
    export default Entertain;