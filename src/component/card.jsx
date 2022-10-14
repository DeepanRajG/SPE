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
import Expand from '../img/expand.png';
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
      navigate(props.navigate);  
    }
    if (props.int===1){
      window.open("https://ipmo.dev.ainqaplatform.in/");
    }
    if (props.int===2){
      window.open("https://avcprimarycare.dev.ainqaplatform.in/");
  
    }
 }

  return (
    <Card  sx={{width:240 ,height:"auto",borderRadius: "20px", textAlign: "center" ,cursor:"pointer",padding:"0px 15px 0px 11px " }}    >
      <CardContent sx={{ paddingBottom: "0px" }}>
        <Grid onClick={cardclk}
          sx={{
            height: 214,
            width: 214,
            maxHeight: { xs: 100, md: 225 },
            maxWidth: { xs: 80, md: 225 },
            backgroundColor: "#f3f5f7",
            display: "flex", justifyContent: "center",
            borderRadius: "20px"
          }}>
          <Box component="img" src={props.images[props.int]}   style={{
            height: 86,
            width: 99, alignSelf: "center",
          }} />
        </Grid>
        <Grid sx={{ textAlign: "center", fontWeight: "500", marginTop: "20px"}}>{props.title[props.int]}</Grid>
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
