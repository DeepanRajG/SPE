import React, { useState } from "react";
import {
  Grid,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import {makeStyles} from '@material-ui/core'
function Entertainhead() {
  const classes = useStyles()
  const navigate = useNavigate();
const [value, setValue] = useState(0)
  const handleChange = (e, newVal)=>{
    setValue(newVal)
    console.log(value)
  }
    let previous = ()=>{
      navigate("/SPE/page");
      } ;
    return (
<Grid container maxWidth="deviceWidth" sx={{marginTop:"10px"}}>
        <Grid container item xl={7} lg={6} md={4}  direction="row" sx={{padding:"10px ",paddingBottom:"0px"}} maxWidth="deviceWidth">
          <Grid>
            <WestIcon sx={{ margin:{xl:"10px 18px 10px 32px",lg:"10px 10px 10px 20px",md:"10px 10px 10px 20px"}}} onClick={previous} />
          </Grid>
          <Grid sx={{margin:{xl:"8px 10px 10px 0px",md:"8px 10px 10px 0px"}}}>
            <Typography
              style={{
                fontWeight: 600,
                fontFamily:"poppins",
                fontSize:"20px",
                "&:hover": { fontColor: "black" },
              }}
            >
              Entertainment
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl={5} lg={6} md={8}  sx={{padding:"10px 30px 10px 0px",paddingBottom:"0px",display:"flex",justifyContent:"flex-end"}}>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {backgroundColor:'black'}}}  classes={{indicator: classes.customStyleOnActiveTab}}>
            <Tab  sx={{minWidth:"40px",textTransform:"capitalize"}}  label={<span className={ value === 0 ? classes.activeTab  : classes.customStyleOnTab}>All</span>} />
            <Tab sx={{minWidth:"50px",textTransform:"capitalize"}}  label={<span className={ value === 1 ? classes.activeTab : classes.customStyleOnTab}>Movies</span>} />
            <Tab sx={{minWidth:"50px",textTransform:"capitalize"}}  label={<span className={ value === 2 ? classes.activeTab : classes.customStyleOnTab}>Music</span>} />
            <Tab sx={{minWidth:"50px",textTransform:"capitalize"}}  label={<span className={ value === 3? classes.activeTab : classes.customStyleOnTab}>Series</span>} />
            <Tab sx={{minWidth:"50px",textTransform:"capitalize"}}  label={<span className={ value === 4 ? classes.activeTab : classes.customStyleOnTab}>Sports</span>} />
            <Tab sx={{minWidth:"50px",textTransform:"capitalize"}}  label={<span className={ value === 5 ? classes.activeTab : classes.customStyleOnTab}>Cartoons</span>} />
          </Tabs>
        </Grid>
      </Grid>
       );
    }
    const useStyles = makeStyles({
      customStyleOnTab:{
        fontSize:'20px !important',
        color:'black !important',
        opacity:"0.70"
      },
      customStyleOnActiveTab:{
        fontSize:'20px !important',
        color:'black !important',
      },
      activeTab:{
        fontSize:'21px',
        fontWeight:'400 !important',
        color:'black !important',fontWeight:"bold !important"
      }
    })
    export default Entertainhead;