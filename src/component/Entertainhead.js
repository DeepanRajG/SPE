import React from "react";
import {
  Grid,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
function Entertainhead() {
  const navigate = useNavigate();
    const [value, setValue] = React.useState("one");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    let previous = ()=>{
      navigate("/page");
      }
    return (
<Grid container sx={{marginTop:"10px"}}>
        <Grid container item md={7} direction="row" sx={{padding:"10px",paddingBottom:"0px"}} >
          <Grid>
            <WestIcon sx={{ margin: "10px 10px 10px 20px" }} onClick={previous} />
          </Grid>
          <Grid>
            <Typography
              sx={{
                margin: "10px 10px 10px 0px",
                fontWeight: "600",
                fontSize:"20px",
                "&:hover": { fontColor: "black" },
              }}
            >
              Entertainment
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={5} sx={{padding:"10px",paddingBottom:"0px"}}>
            <Grid  container >
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style:{background:"black"}}} textColor="Black" >
            <Tab sx={{minWidth: "100px"}} value="one" label="All" />
            <Tab sx={{minWidth: "100px"}} value="two" label="Movies" />
            <Tab sx={{minWidth: "100px"}} value="three" label="Music" />
            <Tab sx={{minWidth: "100px"}} value="four" label="Series" />
            <Tab sx={{minWidth: "100px"}} value="five" label="Sports" />
            <Tab sx={{minWidth: "100px"}} value="six" label="Cartoons" />
          </Tabs>
            </Grid>
        </Grid>
      </Grid>
       );
    }
    export default Entertainhead;