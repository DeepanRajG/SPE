import * as React from 'react';
import {Button,Grid,Menu,MenuItem,Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import WestIcon from "@mui/icons-material/West";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
    const [value, setValue] = React.useState("one");
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  let previous = ()=>{
    navigate("/SPE/page");
    }
  return (
        <Grid container maxWidth="device-width" >
        <Grid container direction="row" item xs={10} sm={10}>
        <Grid>
            <WestIcon sx={{margin:{sm:"10px 10px 10px 0px",xs:"10px 10px 10px 10px",}}} onClick={previous} />
          </Grid>
          <Grid sx={{margin:{xs:"10px 10px 0px 0px",sm:"10px 10px 0px 0px"}}}>
            <Typography
              style={{
                fontWeight: 700,
                fontFamily:"poppins",
                fontSize:"16px",
                "&:hover": { fontColor: "black" },
              }}
            >
              Entertainment
            </Typography>
          </Grid>
        </Grid>
        <Grid  item xs={2} sm={2} style={{display:"flex",justifyContent:"flex-end"}}>
      <Button 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{marginLeft:"80px"}}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>Movies</MenuItem>
        <MenuItem onClick={handleClose}>Music</MenuItem>
        <MenuItem onClick={handleClose}>Series</MenuItem>
        <MenuItem onClick={handleClose}>Sports</MenuItem>
        <MenuItem onClick={handleClose}>Cartoons</MenuItem>
      </Menu>
      </Grid>
      </Grid>
  );
}