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
      navigate("/SPE/page");
      }
    return (
<Grid container style={{marginTop:"10px"}}>
        <Grid container item md={7} direction="row" style={{padding:"10px",paddingBottom:"0px"}} >
          <Grid>
            <WestIcon style={{ margin: "10px 10px 10px 20px" }} onClick={previous} />
          </Grid>
          <Grid>
            <Typography
              style={{
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
        <Grid item md={5} style={{padding:"10px",paddingBottom:"0px"}}>
            <Grid  container >
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style:{background:"black"}}} textColor="Black" >
            <Tab style={{minWidth: "100px"}} value="one" label="All" />
            <Tab style={{minWidth: "100px"}} value="two" label="Movies" />
            <Tab style={{minWidth: "100px"}} value="three" label="Music" />
            <Tab style={{minWidth: "100px"}} value="four" label="Series" />
            <Tab style={{minWidth: "100px"}} value="five" label="Sports" />
            <Tab style={{minWidth: "100px"}} value="six" label="Cartoons" />
          </Tabs>
            </Grid>
        </Grid>
      </Grid>
       );
    }
    export default Entertainhead;