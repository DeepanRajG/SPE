import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  CardContent, Typography,
  Collapse,MenuItem,Menu
} from "@mui/material";
//import Expand from '../img/expand.png';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Option from "./option";
import Expand from "../img/expand.png";


export const Cardd = (props) => {
  const navigate = useNavigate();
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other}  />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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

    <>
      {/* <Card sx={{ borderRadius: "20px", width: { xl: "270px", lg: "270px", md: "310px" }, display: { sm: "none", xs: "none", xl: "block", md: "block", lg: "block" }, cursor: "pointer", margin: "0px" }}>
        <Grid item md={10} lg={10} xl={8} sm={5} spacing={0} sx={{ padding: "30px 40px 20px 30px", marginRight: "0px" }}>
          <Grid onClick={cardclk} justifyContent="center"
            alignItems="center"
            alignContent="center"
            sx={{ padding: { xl: "80px", lg: "60px", md: "40px", sm: "30px", xs: "20px" }, width: { xl: "200px", lg: "200px", md: "200px" } }}
            borderRadius="20px"
            backgroundColor="#f3f5f7"
            component="img" src={props.images[props.int]}>
          </Grid>
        </Grid>
        <Grid item md={2} lg={2} xl={4} sm={5}  >
          <Typography sx={{ fontFamily: "poppins" }}>{props.title[props.int]}</Typography>
        </Grid>
        <Grid sx={{ textAlign: "center" }}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Option OptionList={props.optionsAll} cardint={props.int}></Option>
          </Collapse>
          <ExpandMore sx={{ padding: "0px" }}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            {show ? <Grid ><Box component="img" sx={{ height: "auto", width: "20px" }} src={Expand} /></Grid> : null}
          </ExpandMore>
        </Grid>
      </Card> */}
      <Card sx={{ display: { sm: "none", xs: "none",xl:"block",md:"block",lg:"block"},width:"240px", height: "auto", borderRadius: "20px", textAlign: "center", cursor: "pointer", boxShadow: {md:"0px 3px 40px #00000029",xl:"0px 3px 40px #00000029",lg:"0px 3px 40px #00000029"}, padding:"10px 25px 10px 11px ", margin: "10px 0px 50px 0px ",border:{sm:"2px solid grey",xs:"2px solid grey",md:"none",xl:"none",lg:"none"} }}      >
      <CardContent sx={{ paddingBottom: "0px" }}>
        <Grid onClick={cardclk}
          style={{
            height: 214,
            width: 210,
            maxHeight: {lg: 190, xl: 214 },
            maxWidth: { lg: 140, xl: 210},
            backgroundColor: "#f3f5f7",
            display: "flex", justifyContent: "center",
            borderRadius: "20px", marginLeft: "5px"
          }}>
          <Box component="img" src={props.images[props.int]} style={{
            height: 70,
            width: 70, alignSelf: "center",
          }} />
        </Grid>
        <Grid sx={{ textAlign: "center", fontWeight: "500", marginTop: "13px",paddingLeft:"13px" }}>{props.title[props.int]}</Grid>
      </CardContent>
      <Collapse  in={expanded} timeout="auto" unmountOnExit>
        <Option OptionList={props.optionsAll} cardint={props.int}></Option>
      </Collapse>
      <ExpandMore style={{ marginLeft:"10px"}}
      sx={{"&:hover":{background:"none"}}}
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more">
        {show? <Grid ><Box component="img" sx={{ height: "auto", width: "20px", marginTop: "10px"}} src={Expand} /></Grid> : null}
      </ExpandMore>
  
    </Card>
        <Grid sx={{ display: { lg: "none", xl: "none",md:"none" } }}>
        <Card sx={{width:"360px",maxWidth:{xs:"360px",sm:"450px"},alignSelf:"center",border:"1px solid #DDE4EA",boxShadow:"0",height:"auto",borderRadius:"8px",display:"flex",flexDirection:{xs:"row",sm:"row"}}}>
        <Grid container direction="row" sx={{padding:"10px 0px"}}>
            <Grid item xs={5} sm={5} sx={{display:"flex",justifyContent:"flex-start",paddingLeft:"10px"}}>
            <Box component="img" width="30%" height="auto" sx={{padding:"20px",backgroundColor:"#f3f5f7",borderRadius:"8px"}} src={props.images[props.int]}  />
            </Grid>
            <Grid item xs={5} sm={5} sx={{alignSelf:"center",paddingLeft:"10px"}}>
            <Typography sx={{fontSize:{xs:"16px",sm:"22px"}}} >{props.title[props.int]}</Typography>
            </Grid>
            <Grid item xs={2} sm={2} sx={{alignSelf:"center",paddingLeft:"10px"}}>
              
         <Box
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        component="img"
        src={Expand}
        sx={{height:"20px",width:"auto",}}
      />
      {/* <Small OptionList={props.optionsAll} cardint={props.int}></Small> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
            </Grid>
        </Grid>
        </Card>
    </Grid>
    </>



  )
}