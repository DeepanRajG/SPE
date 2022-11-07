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
//import Expand from '../img/expand.png';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Option from "./option";
import Expand from "../img/expand.png";
import { maxWidth, width } from "@mui/system";
export const Carddd = (props) => {
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
  let show = true;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  //const style={ "opacity":"0.5"}
  let cardclk = () => {
    if (props.int === 0) {
      navigate(props.navigate);
    }
    if (props.int === 1) {
      window.open("https://ipmo.dev.ainqaplatform.in/");
    }
    if (props.int === 2) {
      window.open("https://avcprimarycare.dev.ainqaplatform.in/");
    }
  }
  return (

    <div>
 
        <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              alignContent="stretch"
              wrap="wrap"
            >
                                 <Card style={{ height: "auto", borderRadius: "20px", textAlign: "center", cursor: "pointer", boxShadow: "0px 3px 40px #00000029", padding: "10px 11px 20px 11px ", margin: "10px ", width: "500px", display: "flex" }} >
                                 {/* <CardContent style={{ paddingBottom: "0px", display: "flex" }}> */}
              <Grid item md={3}  
              onClick={cardclk}
            style={{
            //   height: 114,

            //   width: 114,
              // maxHeight: { xs: 100, md: 214 },
              // maxWidth: { xs: 80, md: 200 },

              backgroundColor: "#f3f5f7",
              display: "flex", justifyContent: "center",
              borderRadius: "20px",
            }}>
            <img src={props.images[props.int]} style={{
              height: 50,
              alignSelf: "center",
            }} />
              </Grid>
              <Grid item md={7}sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "500", fontsize: "70px" }}>{props.title[props.int]}

              </Grid>
              {/* </CardContent> */}
              <Grid item md={2}>
              <ExpandMore style={{ paddingRight: "30px", position: "static" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">

          {show ? <Box component="img" style={{ height: "auto", width: 20, position: "static" }} src={Expand} /> : null}

        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit direction="row">
          <Option OptionList={props.optionsAll} cardint={props.int}></Option>
        </Collapse>
              </Grid>
              </Card>
            </Grid>
            
    </div>
    )
  }