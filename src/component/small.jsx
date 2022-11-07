import { React, useState } from "react";
import{}
    CardContent,Menu,MenuItem
} from "@mui/material";
export default function Option(props) {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let setoptions=[];
  let hide =false;
  for (let i = 0; i < props.OptionList.length; i++) {
    if (props.cardint === i) {
        let dat = props.OptionList[i]
        setoptions=dat
    }
    else{
    }
  }
    return (
        <>
        <CardContent sx={{marginRight:"-24px",marginBottom:"-10px"}} >

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {Array.from(Array(setoptions.length)).map((_, index) => (
               <MenuItem onClick={handleClose} >{setoptions[index]}</MenuItem>
            ))}
 </Menu>
      </CardContent>



        </>
    )
}