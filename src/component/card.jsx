import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Option from "./option";
export const Cardd = (props) => {
 
  const navigate = useNavigate();
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = useState(false);
  let show =true;
  const handleExpandClick = () => {
    setExpanded(!expanded);
}
   //const style={ "opacity":"0.5"}
  let cardclk = ()=>{
    if (props.int===0){
      navigate("/enter");
    }
    if (props.int===1){
      window.open("https://ipmo.dev.ainqaplatform.in/");
    }
    if (props.int===2){
      window.open("https://avcprimarycare.dev.ainqaplatform.in/");
  
    }
 }
  // console.log("loop agithu");
  return (
    <Card  sx={{ maxWidth: 220, borderRadius: "10px", textAlign: "center" , }}    >
      <CardContent sx={{ paddingBottom: "0px" }}>
        <Grid onClick={cardclk}
          sx={{
            height: 200,
            width: 180,
            maxHeight: { xs: 100, md: 180 },
            maxWidth: { xs: 80, md: 200 },
            backgroundColor: "#f3f5f7",
            display: "flex", justifyContent: "center",
            borderRadius: "8px"
          }}>
          <Box component="img" src={props.images[props.int]}   style={{
            height: 86,
            width: 89, alignSelf: "center",
          }} />
        </Grid>
        <Grid sx={{ textAlign: "center", fontWeight: "500", marginTop: "10px" }}>{props.title[props.int]}</Grid>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Option OptionList={props.optionsAll} cardint={props.int}></Option>
      </Collapse>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more">
          { show ? <ExpandMoreIcon /> : null }
        </ExpandMore>
    </Card>
)
}
